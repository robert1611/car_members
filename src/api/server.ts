const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjZjMWYzZmNmM2Q4ZTUyNGZiOTk5NjAwZWZkNjQ2YmVjOTBlMzIxZGNhYzQ4ZmJiMiIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE3IDE0OjMyOjQ1LjYwNDYxNFwiIn0.RjSBekCANqrVUF-_l3SB2R-RyQBwmXr7i2GHaFV67eI'

export const server_calls = { 
    get: async () => {
        const response = await fetch(`/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },   
    delete: async (id:string) => {
        const response = await fetch(`/cars`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`/cars`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Create new data from server')
    }

    return await response.json()
    }
}
