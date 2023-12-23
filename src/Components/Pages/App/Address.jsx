import Phone from "../../../assets/phone.png";
import Email from "../../../assets/email.png";
import location from "../../../assets/address.png";


function Address() {
    
  return (
    <div className="c h-full relative">
      <div className="c-bg w-2 bg-green-500 h-full absolute"></div>
      <div className="c-wrapper p-12 flex">
        <div className="c-left flex-1">
          <h1 className="c-title text-6xl w-4/5">Let's contact with me</h1>
          <div className="c-info">
            <div className="c-info-item flex items-center my-10 font-light w-4/5">
              <img src={Phone} alt="phone" className="c-icon w-10 h-10 mr-5" />
              <button
                onClick={() => (window.location.href = "tel:+8801985381288")}
                className="text-base"
              >
                +88 01917-942352
              </button>
            </div>
            <div className="c-info-item flex items-center my-10 font-light w-4/5">
              <img className="c-icon w-10 h-10 mr-5" src={Email} alt="email" />
              <button
                onClick={() =>
                  (window.location.href = "mailto:sabidofficial@gmail.com")
                }
                className="text-base"
              >
                __@gmail.com
              </button>
            </div>
            <div className="c-info-item my-10 font-light w-4/5 flex items-center">
              <img className="c-icon w-10 h-10 mr-5" src={location} alt="" />
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className="hidden c-right flex-1 md:flex flex-col items-center justify-center">
          <p className="c-desc text-base">
            <b>Reach Out and Start a Conversation: </b> Let's Discuss Your
            Ideas, Projects, and Opportunities for Collaboration
          </p>
          {/* <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-3 w-full"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
                className="input input-accent sm:w-auto w-full"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="email"
                placeholder="Email"
                name="user_email"
                className="input input-accent sm:w-auto w-full"
              />
            </div>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="input input-accent sm:w-auto w-full"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className="textarea textarea-accent"
            />
            <button className="submit_button rounded-md">Submit</button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Address;
