import type { IBooth } from '@/types/booth'

const API_BASE_URL = 'http://localhost:3000/api'

export async function getAllBooths(): Promise<IBooth[]> {
  const response = await fetch(`${API_BASE_URL}/booths`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return response.json()
}

export async function updateBooth(booth: IBooth): Promise<IBooth> {
  const response = await fetch(`${API_BASE_URL}/booths/${booth.boothId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booth),
  })
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return response.json()
}
