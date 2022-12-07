import React from 'react'

export default function Profile({profile}) {
    console.log("here the profile ",profile)

    const email=profile.email;
    const indexOfAt=email.indexOf("@")
    const defaultName=email.substring(0,indexOfAt)

    console.log("default username is ",defaultName)
    

  return (
      <>
    <div>Profile</div>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg"/><span class="font-weight-bold">{defaultName}</span><span class="text-black-50">{email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    
                    <div class="col-md-6"><label class="labels">Username : </label><input type="text" class="form-control" placeholder="Update my username"/></div>
                </div>
                <div class="row mt-3">
                   
                    <div class="col-md-12"><label class="labels">Bio</label><textarea type="text" class="form-control" placeholder="Choose a bio " value=""/></div>
                    <div class="col-md-12"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="male/female" value=""/></div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Categorie</label><input type="text" class="form-control" placeholder="Categorie" value=""/></div>
                    <div class="col-md-6"><label class="labels">Update My image</label><input type="text" class="form-control" value="" placeholder="Update my photo"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    
    </div>
</div>


    </>
  )
}
