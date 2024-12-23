'use client'

import { useEffect, useState } from 'react'

import { Button, Label, Dropdown, DropdownItem, Tabs, TabItem, TextInput, Checkbox, Radio, Table, Spinner } from "flowbite-react"
import { radioTheme, tabTheme, checkboxTheme, inputTheme, dropdownTheme } from "./themes"
import { changeKey, addListItem, removeListItem, exportAsExcel } from '@/app/utils/dataProcessing'
import { fetchData } from '@/app/utils/requestsHandling'


const languages = ["English", "Akkadian"]
const wordConnectors = ["and", "or", "and not"]
const wordProximity = ["near"]
const sorting = ["project", "author"]
const headers = ["Astrinomical Diaries", "Label", "Fragments"]



export default function SearchPage() {
  const [existingProjects, setExistingProjects] = useState([]) 
  const [loaded, setLoaded] = useState(false)  
  const [loading, setLoading] = useState(false)
  const [selectedProjects, setSelectedProjects] = useState([])
  const [allProjects, setAllProjects] = useState(true)
  const [resultProjects, setResultProjects] = useState([])
  const [viewSelection, setView] = useState([])
  const [searchData, setSearchData] = useState({
    inputLanguage: "Akkadian",
    searchType: "textualSearch",
    caseSensitive: false,
    exactMatch: false,
    proximity: 0
  })
  const [words, setWords] = useState({
    firstWord: "",
    secondWordOperand: "and",
    secondWord: "",
    thirdWordOperand: "and",
    thirdWord: ""
  })
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    try {
      setLoading(true)

      const projects = allProjects ? existingProjects : selectedProjects
      setView(projects)
      setResultProjects(projects)

      const data = {...searchData, ...words, "projects": projects}
      const response = await fetchData("POST", "process", data)

      setResults(response["results"])
      setLoading(false)
      console.log(response)
    } catch (error) {
      console.error('Error while fetching data:', error)
    }
  }

  useEffect(() => {
    setLoaded(true)

    const getData = async () => {
      try {
        const response = await fetchData("GET", "projects")

        setExistingProjects(response["projects"])
      } catch (error) {
        console.error('Error while fetching data:', error)
      }
    }
    getData()
  }, [])


  if (loaded) { return (
    <div className="h-full px-16 flex flex-col gap-6">
      <div className="bg-white rounded-xl h-auto p-6 flex flex-row items-center gap-6">
        <div className="font-bold text-dark-green">
          SEARCH IN
        </div>
        <div className="flex items-center gap-3">
          <Radio theme={radioTheme} id="projects-all" name="projects" value="selected" checked={allProjects} onChange={(event) => setAllProjects(event.target.checked)}/>
          <Label htmlFor="projects-all">All projects</Label>
        </div>
        <div className="flex items-center gap-3">
          <Radio theme={radioTheme} id="projects-selected" name="projects" checked={!allProjects} onChange={(event) => setAllProjects(!event.target.checked)}/>              
          <Dropdown theme={dropdownTheme}
            label={selectedProjects.length > 0 ? selectedProjects.join(", ") : "Pick one or more projects"} dismissOnClick={false} className='max-h-64 overflow-y-auto' disabled={allProjects}>
              {
                existingProjects.sort().map(project_option => {
                  return(
                    <DropdownItem id={project_option} label={project_option}> 
                      <div className="flex items-center gap-3">
                        <Checkbox theme={checkboxTheme} id={project_option} checked={selectedProjects.includes(project_option)}
                          onChange={(event) => event.target.checked ? addListItem(setSelectedProjects, event.target.id) : removeListItem(setSelectedProjects, event.target.id)}/>
                        <Label htmlFor="case-sensitive">{project_option}</Label>
                      </div>
                    </DropdownItem>
                  )
                })
              }
            </Dropdown>
        </div>
      </div>
      <div className="bg-white rounded-xl h-auto px-6 pt-6 flex justify-between">
        <div className="flex flex-col items-center w-full gap-3">
          <div className="font-bold text-dark-green self-start">
            SEARCH BY
          </div>
          <Tabs aria-label="Search" variant="pills" theme={tabTheme}>
            <TabItem active title="Single word">
              <div className="p-6 text-sm text-black border rounded-md h-auto w-full flex flex-col gap-6">
                {/* <div className="flex flex-row gap-10">
                  <div className="flex items-center gap-3">
                    <Radio theme={radioTheme} id="word-index" name="single-word" value="word-index" checked={searchData["searchType"] == "wordIndex"} 
                      onChange={(event) => event.target.checked ? changeKey(setSearchData, "searchType", "wordIndex") : null}/>
                    <Label htmlFor="projects-all">Word index</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio theme={radioTheme} id="lemma" name="single-word" value="lemma" checked={searchData["searchType"] == "lemma"}
                      onChange={(event) => event.target.checked ? changeKey(setSearchData, "searchType", "lemma") : null}/>
                    <Label htmlFor="projects-all">Lemma</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio theme={radioTheme} id="textual-search" name="single-word" value="textual-search" checked={searchData["searchType"] == "textualSearch"}
                      onChange={(event) => event.target.checked ? changeKey(setSearchData, "searchType", "textualSearch") : null}/>
                    <Label htmlFor="projects-all">Textual search</Label>
                  </div>
                </div> */}
                <div className="w-full flex flex-row gap-6">
                  <TextInput id="search" theme={inputTheme} type="text" className="w-full" placeholder="Type a word or lemma to search for" onChange={(event) => changeKey(setWords, "firstWord", event.target.value)} value={words["firstWord"]} required />
                  {loading ? <Button color="light" disabled className="rounded-md px-10 shadow-md bg-gray-300 font-semibold h-10 w-48"><div className='flex flex-row justify-between gap-3'><Spinner color="success" size="sm"/>Searching...</div></Button> 
                    : <div className='w-48'><Button color="light" className="rounded-md px-10 shadow-md bg-gray-300 h-10 hover:bg-gray-300 font-semibold w-48 focus:ring-0" onClick={handleSearch}>Search</Button></div>}
                </div>
                {/* <div className="flex flex-row gap-10">
                  <div className="flex items-center gap-3">
                    <Checkbox theme={checkboxTheme} id="case-sensitive" checked={searchData["caseSensitive"]} 
                      onChange={(event) => changeKey(setSearchData, "caseSensitive", event.target.checked)}/>
                    <Label htmlFor="case-sensitive">Case sensitive</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox theme={checkboxTheme} id="exact-match" checked={searchData["exactMatch"]} 
                      onChange={(event) => changeKey(setSearchData, "exactMatch", event.target.checked)}/>
                    <Label htmlFor="exact-match">Exact match</Label>
                  </div>
                </div> */}
              </div>
            </TabItem>
            <TabItem title="Advanced query">
              <div className="p-6 text-sm text-black border rounded-md h-auto w-full flex flex-col gap-6">
                {/* <div className="flex flex-row gap-10">
                  <div className="flex items-center gap-3">
                    <Radio theme={radioTheme} id="word-index" name="word-prox" value="word-index" checked={searchData["searchType"] == "wordIndex"}
                      onChange={(event) => event.target.checked ? changeKey(setSearchData, "searchType", "wordIndex") : null}/>
                    <Label htmlFor="projects-all">Word index</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio theme={radioTheme} id="lemma" name="word-prox" value="lemma" checked={searchData["searchType"] == "lemma"}
                      onChange={(event) => event.target.checked ? changeKey(setSearchData, "searchType", "lemma") : null}/>
                    <Label htmlFor="projects-all">Lemma</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio theme={radioTheme} id="textual-search" name="word-prox" value="textual-search" checked={searchData["searchType"] == "textualSearch"}
                      onChange={(event) => event.target.checked ? changeKey(setSearchData, "searchType", "textualSearch") : null}/>
                    <Label htmlFor="projects-all">Textual search</Label>
                  </div>
                </div> */}
                <div className="w-full flex flex-row gap-6">
                  <div className="w-full flex flex-col gap-3">
                    <TextInput theme={inputTheme} id="search" type="text" placeholder="Type a word or lemma to search for" required onChange={(event) => changeKey(setWords, "firstWord", event.target.value)} value={words["firstWord"]} />
                    <div className="flex flex-row gap-3 w-40 items-center">
                      Within                     
                      <TextInput theme={inputTheme} id="proximity" type="text" required onChange={(event) => changeKey(setSearchData, "proximity", event.target.value)} value={searchData["proximity"]} />
                      words
                    </div>
                  </div>
                  <Dropdown theme={dropdownTheme} 
                        label={words["secondWordOperand"]} dismissOnClick={true}>
                          {
                            wordConnectors.sort().map(operandOption => {
                              return(
                                <DropdownItem id={operandOption} label={operandOption} onClick={() => changeKey(setWords, "secondWordOperand", operandOption)}> {operandOption}
                                </DropdownItem>
                              )
                            })
                          }
                  </Dropdown>
                  <div className="w-full flex flex-col gap-3">
                    <TextInput id="search" theme={inputTheme} type="text" placeholder="Type a word or lemma to search for" onChange={(event) => changeKey(setWords, "secondWord", event.target.value)} value={words["secondWord"]} />
                    <div className="flex flex-row gap-3 items-center">
                      <Dropdown theme={dropdownTheme} 
                        label="near" dismissOnClick={true}>
                          {
                            wordProximity.sort().map(operandOption => {
                              return(
                                <DropdownItem id={operandOption} label={operandOption}> {operandOption}
                                </DropdownItem>
                              )
                            })
                          }
                      </Dropdown>
                      first word
                    </div>
                  </div>
                  {
                    loading ? <Button color="light" disabled className="rounded-md px-10 shadow-md bg-gray-300 font-semibold h-10 w-48"><div className='flex flex-row justify-between gap-3'><Spinner color="success" size="sm"/>Searching...</div></Button> 
                    : <Button color="light" className="rounded-md px-20 shadow-md bg-gray-300 hover:bg-gray-300 font-semibold w-48 h-10 focus:ring-0" onClick={handleSearch}>Search</Button> 

                   }
                  {/* <Dropdown theme={dropdownTheme} 
                        label={words["thirdWordOperand"]} dismissOnClick={true}>
                          {
                            wordConnectors.sort().map(option => {
                              return(
                                <DropdownItem id={option} label={option} onClick={() => changeKey(setWords, "thirdWordOperand", option)}> {option}
                                </DropdownItem>
                              )
                            })
                          }
                  </Dropdown> */}
                </div>
                {/* <div className="w-full flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-10">
                    <div className="flex items-center gap-3">
                      <Checkbox theme={checkboxTheme} id="case-sensitive-prox" checked={searchData["caseSensitive"]} 
                        onChange={(event) => changeKey(setSearchData, "caseSensitive", event.target.checked)}/>
                      <Label htmlFor="case-sensitive">Case sensitive</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox theme={checkboxTheme} id="exact-match-prox" checked={searchData["exactMatch"]} 
                        onChange={(event) => changeKey(setSearchData, "exactMatch", event.target.checked)}/>
                      <Label htmlFor="exact-match">Exact match</Label>
                    </div>
                  </div>
                   {
                    loading ? <Button color="light" disabled className="rounded-md px-10 shadow-md bg-gray-300 font-semibold w-48"><div className='flex flex-row justify-between gap-3'><Spinner color="success" size="sm"/>Searching...</div></Button> 
                    : <Button color="light" className="rounded-md px-10 shadow-md bg-gray-300 hover:bg-gray-300 font-semibold w-48 focus:ring-0" onClick={handleSearch}>Search</Button> 

                   }
                </div> */}
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
      <div className="w-full h-auto flex flex-row items-start gap-6">
        <div className="bg-white rounded-xl p-6 flex flex-row items-center gap-6">
          <div className="flex flex-col gap-3 items-center">
            <div className="font-bold text-dark-green self-start">
              SELECTION
            </div>
            <div className={`flex flex-col overflow-auto border p-3 rounded-md max-h-80 gap-3 ${results && results.length > 0 && !loading ? "" : "hidden"}`}>
            {
              resultProjects.sort().map(project => {
                return(
                  <div className="flex items-center gap-3">
                    <Checkbox theme={checkboxTheme} id={project} checked={viewSelection.includes(project)} onChange={(event) => event.target.checked ? addListItem(setView, project) : removeListItem(setView, project)}/>
                    <Label htmlFor="case-sensitive">{project}</Label>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl w-full h-auto p-6 flex flex-col items-start gap-6">
          <div className="flex flex-row gap-3 items-center">
            <div className="font-bold text-dark-green self-start">
              RESULTS
            </div>
            <div onClick={() => results && results.length > 0 ? exportAsExcel(results) : null} className="h-4 w-4 hover:h-5 hover:w-5 bg-no-repeat bg-cover bg-[url('../public/excel.png')]"></div>
          </div>
          <div className="flex flex-row gap-3 justify-between items-center w-full">
            <span className="h-10 w-1"></span>
            <div className="text-sm text-black items-center gap-3 flex flex-row">
              Sort by: 
                <Dropdown theme={dropdownTheme} 
                  label="project" dismissOnClick={true} className='max-h-40 overflow-y-auto'>
                    {
                      sorting.sort().map(option => {
                        return(
                          <DropdownItem id={option} label={option}> {option}
                          </DropdownItem>
                        )
                      })
                    }
                </Dropdown>
            </div>
            <span className="border-r border-gray-300 h-10 w-1"></span>
            <div className="text-sm text-black items-center gap-3 flex flex-row">
              Group by: 
                <Dropdown theme={dropdownTheme} 
                  label="project" dismissOnClick={true} className='max-h-40 overflow-y-auto'>
                    {
                      sorting.sort().map(option => {
                        return(
                          <DropdownItem id={option} label={option}> {option}
                          </DropdownItem>
                        )
                      })
                    }
                </Dropdown>
            </div>
            <span className="border-r border-gray-300 h-10 w-1"></span>
            <div className="text-sm text-black items-center gap-3 flex flex-row">
              Number of lines: 
                <Dropdown theme={dropdownTheme} 
                  label="3" dismissOnClick={true} className='max-h-40 overflow-y-auto'>
                    {
                      sorting.sort().map(option => {
                        return(
                          <DropdownItem id={option} label={option}> {option}
                          </DropdownItem>
                        )
                      })
                    }
                </Dropdown>
            </div>
            <span className="border-r border-gray-300 h-10 w-1"></span>
            <div className="text-sm text-black items-center gap-3 flex flex-row">
              Display language: 
                <Dropdown theme={dropdownTheme} 
                  label="Akkadian" dismissOnClick={true} className='max-h-40 overflow-y-auto'>
                    {
                      languages.sort().map(option => {
                        return(
                          <DropdownItem id={option} label={option}> {option}
                          </DropdownItem>
                        )
                      })
                    }
                </Dropdown>
            </div>
            <span className="h-10 w-1"></span>
          </div>
          <div className="h-128 w-full border rounded-md overflow-x-auto">
            <div className="flex h-full flex-col gap-3">
              {
                results && results.length > 0 ? Object.values(results).map(project => {
                  if (viewSelection.includes(project[0])) {
                  return(
                    <div className='flex flex-col border rounded-md gap-1'>
                      <div className="h-16 flex items-center px-6 gap-1 text-black text-md">
                        <span className='font-bold'> Project: </span> {project[0]}
                      </div>
                      <Table striped={true}>
                        <Table.Head>
                          {headers.map((header) => (
                            <Table.HeadCell key={header}>{header}</Table.HeadCell>
                          ))}
                        </Table.Head>
                        <Table.Body>
                          {Object.values(project.slice(1)).map((row, rowIndex) => (
                            <Table.Row key={rowIndex}>
                              {Object.values(row.split(",")).map((value, colIndex) => (
                                <Table.Cell key={colIndex}>{value}</Table.Cell>
                              ))}
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                    </div>
                  )
                }
                }) : <div className='h-full w-full grid text-sm italic place-items-center text-gray-300'>Found data will be displayed here</div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}
}