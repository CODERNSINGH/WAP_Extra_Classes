export const Signup = async ({email ,password})=>{
    const response = await fetch ("./api/auth/signup",{
        headers:{
            "Content-Type": "application/json"
            },
            body:JSON.stringify({email,password}),
            method: "POST",
    });
    if (!response.ok){
    }return await response.json();
}
export const Login = async ({email ,password})=>{
    const response = await fetch ("./api/auth/signup",{
        headers:{
            "Content-Type": "application/json"
            },
            body:JSON.stringify({email,password}),
            method: "POST",
    });
    if (!response.ok){
    }await response.json();
}






