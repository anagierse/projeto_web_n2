// -------------- CREATE --------------
export async function addNight(night) {
    try {
      let response = await fetch("http://localhost:8000/night", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(night)
      });
      return response.status;
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  
//  -------------- READ ----------------

export async function getNight(night){
    try{
        let response = await fetch("http://localhost:8000/night")
        let data = await response.json()
        return data
    }
    catch(error){
        console.log("ERRO: "+error)
    }
}

export async function getNightByDate(date){
    try{
        let response = await fetch(`http://localhost:8000/night?author=${date}`)
        let data = await response.json()
        return data
}
catch(error){
    console.log("ERROR: "+error)
}
}

export async function getNightById(id){
    try{
        let response = await fetch(`http://localhost:8000/night?id=${id}`)
        let data = await response.json()
        return data
    } catch(error){
        console.log("ERROR: "+error)
    }
}

// ------------------- UPDATE -------------------
export async function updateNight(night){
    try{
        let response = await fetch("http://localhost:8000/night/" + night.id,
        {
            method: 'PUT',
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(night)
        }
        ); return response.status
    }catch(error){
        console.log("ERRO: "+error)
    }
}


// --------------------- DELETE ----------------------
export async function deleteNight(id){
    try{
        let response = await fetch("http://localhost:8000/night/"+id,
            {
                method: "DELETE"
            })
            return response.status
    }catch(error){
        console.log("ERROR: "+error)
    }
        
}