import * as XLSX from 'xlsx'

export const addListItem = (setter, newItem) => {
  setter((prevItems) => [...prevItems, newItem])
}

export const removeListItem = (setter, valueToRemove) => {
  setter((prevItems) => prevItems.filter((item, index) => item !== valueToRemove))
}

export const changeKey = (setter, key, value) => {
  setter((prevData) => ({
    ...prevData,
    [key]: value
  }))
}

export function listToDict (dataList) {
  let result = []
  const data = dataList.slice(1) // remove project name

  data.map(value => {
    const [ad, label, fragments] = value

    result.push(
      {
        "Astrinomical Diaries": ad.replace(/[\[\]']/g, ''), // TODO fix if can be many ADs as a list (and separator should not be a comma),
        "Label": label,
        "Fragments": fragments
      }
    )
  })

  return result
}

export function listToCSV (dataList) {
  let result = []

  const project = dataList[0] // save project name for csv
  const data = dataList.slice(1) // remove project name

  data.map(value => {
    const [ad, label, fragments] = value

    result.push(
      `${project},${ad.replace(/[\[\]']/g, '')},${label},${fragments}`
    )
  })

  return result
}

export function exportAsExcel (data) {
  const workbook = XLSX.utils.book_new()

  data.map(project => {
    const formattedData = listToDict(project)
    const worksheet = XLSX.utils.json_to_sheet(formattedData)

    XLSX.utils.book_append_sheet(workbook, worksheet, project[0])
  })

  XLSX.writeFile(workbook, 'data.xlsx')
}

export function exportAsCSV (data) {
  var csv = "Project,Astrinomical Diaries,Label,Fragments"

  data.map(project => {
    const formattedData = listToCSV(project)
    
    csv = [
      csv,
      ...formattedData
    ].join("\n")
  })

  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'data.csv'
  a.click()
  URL.revokeObjectURL(url)
}