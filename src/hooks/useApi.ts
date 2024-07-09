/* eslint-disable @typescript-eslint/no-explicit-any */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface ApiResponse<T> {
  data?: T
  error?: string
}

const baseUrl = 'https://cms.smartworks.my.id/api'

export const HTTP_Request = async <T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: any,
  headers: HeadersInit = { 'Content-Type': 'application/json' }
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(baseUrl + url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    })

    if (!response.ok) {
      const errorText = await response.text()
      return { error: errorText || 'An error occurred' }
    }

    const data: T = await response.json()
    return { data }
  } catch (error: any) {
    return { error: error.message || 'Network error' }
  }
}
