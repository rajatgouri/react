import { useForm } from "react-hook-form";

export default function Form({ handleFormSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm();

  const onFormSubmit = (data) => {
    handleFormSubmit(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      note: ""
    });
  };

  return (
    <div classNameName="Form">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Fisrt Name"
            id="firstName"
            {...register("firstName", { required: true })}
          />
          {errors?.firstName?.type === "required" && (
            <span className="text-danger">Last Name is required</span>
          )}
        </div>
        <div className="form-group">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            id="lastName"
            {...register("lastName", { required: true })}
          />
          {errors?.lastName?.type === "required" && (
            <span className="text-danger">Last Name is required</span>
          )}
        </div>
        <div className="form-group">
          <label for="email">email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />

          {errors?.email?.type === "required" && (
            <span className="text-danger">Email is required</span>
          )}
          {errors?.email?.type === "pattern" && (
            <span className="text-danger">Enter Valid Email</span>
          )}
        </div>
        <div className="form-group">
          <label for="text">Note:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter note"
            id="note"
            {...register("note", {
              required: true
            })}
          />
          {errors?.note?.type === "required" && (
            <span className="text-danger">Note is required</span>
          )}
        </div>
        <button className="btn btn-light">+ Add User</button>
      </form>
    </div>
  );
}
