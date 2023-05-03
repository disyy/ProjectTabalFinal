import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function LoginPage() {
  const fields = [
    { label: "Email", type: "email", placeholder: "Enter email" },
    { label: "Password", type: "password", placeholder: "Enter password" }
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="bgR" style={{ backgroundImage: "url(https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg)", backgroundColor: "#BDCDD6", backgroundSize: "cover", backgroundPosition: "center center", backdropFilter: "blur(15px)" }}>
      <div className="container" >
         <div className="row justify-content-center">
           <div className="col-md-5 col-lg-5" >
              <div className="card my-5" style={{ backgroundColor: "#7B8FA1", opacity: 0.8, position: "relative", zIndex: 1 }}>
                      <Form onSubmit={handleSubmit} className="shadow p-4 rounded">
                        <h1 className="text-center mb-4">Power Fitness</h1>
                        {fields.map((field) => (
                          <Form.Group key={field.label} className="mb-3">
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                              type={field.type}
                              placeholder={field.placeholder}
                              value={field.label === "Email" ? email : password}
                              onChange={(e) =>
                                field.label === "Email"
                                  ? setEmail(e.target.value)
                                  : setPassword(e.target.value)
                              }
                            />
                          </Form.Group>
                        ))}
                          <Button variant="primary" type="submit" className="w-100 mt-3">
                          Sign in
                          </Button>
                            <div className="text-center mt-3">
                                <a href="#">Forgot password?</a>
                            </div>
                      </Form>
                            {email && <h2>Your email: {email}</h2>}
                            {password && <h2>Your password: {password}</h2>}
                      </div>
                    </div>
                </div>
              </div>
            </div>
       );
    }
    export default LoginPage;
