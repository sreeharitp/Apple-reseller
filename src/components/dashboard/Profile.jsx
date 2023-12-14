import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="  bg-white rounded-md mb-5 border border-[#E4E7E9]">
          <div className=" py-3 px-6 border-b border-[#E4E7E9]">
            <h5 className="text-[16px] font-medium">Edit Profile</h5>
          </div>
          <form className=" p-6 ">
            <label htmlFor="">Your Name</label>
            <input type="text" className="mb-5" />
            <div className="flex flex-col sm:flex-row  sm:items-center  sm:gap-5">
              <div className="sm:flex-1">
                <label htmlFor="">Phone Number</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">Email Address</label>
                <input type="text" className="mb-5" />
              </div>
            </div>
            <label htmlFor="">Address</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              className="mb-5"
            ></textarea>
            <div className="flex flex-col sm:flex-row  sm:items-center sm:gap-5">
              <div className="sm:flex-1">
                <label htmlFor="">Country</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">State</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">City</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">Zip Code</label>
                <input type="text" className="mb-5" />
              </div>
            </div>
            <label htmlFor="">Product Price</label>
            <input type="text" className="mb-5" />
          </form>
        </div>
          <button className="tracking-widest uppercase bg-black text-white px-8 py-2.5 text-[13px]  rounded-md">
            Save Changes
          </button>
    </div>
  )
}

export default Profile