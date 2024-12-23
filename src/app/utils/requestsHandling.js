const backendUrl = process.env.NEXT_PUBLIC_BACKEND

export async function fetchData(method, endpoint, body="") { 
  const abortController = new AbortController()
  const timeoutId = setTimeout(() => abortController.abort(), 200000)

  try {  
    const requestParams =  {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      signal: abortController.signal, 
    }
    if (method == 'POST') {
      requestParams["body"] = JSON.stringify(body)
    }

    const response = await fetch(`${backendUrl}/${endpoint}`, requestParams)

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const answer = await response.json()
    return answer
  } catch (error) {
    console.error('Error:', error.message)
  } finally {
    clearTimeout(timeoutId)
  }
}
