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
    const [ad, label, fragments] = value.split(",")

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

export function exportAsExcel (data) {
  const workbook = XLSX.utils.book_new();

  data.map(project => {
    const formattedData = listToDict(project)
    const worksheet = XLSX.utils.json_to_sheet(formattedData)

    XLSX.utils.book_append_sheet(workbook, worksheet, project[0])
  })

  XLSX.writeFile(workbook, 'data.xlsx');
}