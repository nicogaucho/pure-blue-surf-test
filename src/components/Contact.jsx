import { useForm } from "react-hook-form"
import { Toaster, toast } from 'sonner'
import departureURL from "../assets/departure.png"

export default function Contact() {
  const { 
      register,
      formState: { errors },
      handleSubmit, 
    } = useForm()
  const onSubmit = (data) => {
      toast.success('Info sent, thank you 🌊')
      console.log(data);
  }

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-xl-10">
          <div className="card border-0 overflow-hidden">
            <div className="card-body p-0">
              <div className="row g-0 align-items-center justify-content-around">
                <div className="col-12 col-md-5 d-none d-sm-block mb-5">
                  <img src={departureURL} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6 p-5 mb-5">
                  <div className="text-center">
                    <div className="h1 fw-light tx-orange">LET us know</div>
                    <p className="mb-4 text-muted">
                      Take your time before booking to inquire about packages and availability; we look forward to seeing you here.
                    </p>
                  </div>  


                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                      <input 
                        className="form-control rounded-0" 
                        placeholder="Name" 
                        {...register("Name", { required: true, maxLength: 20 })}
                        aria-invalid={errors.Name ? "true" : "false"}
                      />
                      {errors.Name?.type === "required" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Name is required</p>
                      )}
                      {errors.Name?.type === "maxLength" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Maximum 20 characters allowed</p>
                      )}
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input 
                        className="form-control rounded-0" 
                        placeholder="Email Address" 
                        {...register("Email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                        aria-invalid={errors.Email ? "true" : "false"}
                      />
                      {errors.Email?.type === "required" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Email is required</p>
                      )}
                      {errors.Email?.type === "pattern" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Email not valid</p>
                      )}
                      <label htmlFor="emailAddress">Email Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select rounded-0" id="floatingSelect" aria-label="Floating label select example">
                          <option value="Surf + Stay">Surf + Stay</option>
                          <option value="Yoga + Stay">Yoga + Stay</option>
                          <option value="Surf + Yoga + Stay">Surf + Yoga + Stay</option>
                          <option value="Only Stay">Only Stay</option>
                        </select>
                        <label htmlFor="floatingSelect">Which plan are you interested to?</label>
                    </div>
                    {/* <div className="row g-2 mb-3">
                      <div className="col-md">
                        <div className="form-floating">
                          <input type="date" name="arrival" className="form-control rounded-0" />
                          <label htmlFor="arrival">Date arrival</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input type="date" name="departure" className="form-control rounded-0" />
                          <label htmlFor="departure">Date departure</label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-floating mb-3">
                      <textarea 
                        className="form-control rounded-0" 
                        placeholder="Message" 
                        {...register("Message")}
                        style={{ height: "100px" }}
                        >
                      </textarea>
                      <label htmlFor="message">Would you leave us a message...</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn-book text-uppercase spacing" type="submit">Get in touch</button>
                    </div>
                    <Toaster richColors position="bottom-right" expand={true} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}