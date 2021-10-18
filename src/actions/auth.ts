


export const login = (userData:any, history: any) => async (dispatch:any) => {
    console.log('auth component',userData)
    const body = JSON.stringify(userData)
    console.log(body)

} 