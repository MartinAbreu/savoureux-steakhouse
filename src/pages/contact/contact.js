import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import HeaderImg from "../../images/contact.jpg";
import { motion } from "framer-motion";

import emailjs from "emailjs-com";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubject = (event) => {
    this.setState({ subject: event.target.value });
  };

  handleMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Your Message has been sent. Thank You!");
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "feedback",
        ".contact-form",
        "user_bWG6oIe4e47DdKtrq9rl9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  render() {
    return (
      <ContactPage>
        <HeaderBg />
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Title>Contact Us</Title>
          <ContactContent>
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <ContactWrap>
                <span
                  style={{
                    fontFamily: "Dancing Script, cursive",
                    fontSize: "2rem",
                    textAlign: "center",
                    lineHeight: "1.6rem",
                  }}
                >
                  We want to hear from you!
                </span>
                <hr style={{ color: "black", width: "15rem" }} />
                <InputStyle
                  type="text"
                  value={this.state.name}
                  onChange={this.handleName}
                  label="Name"
                  style={{ marginTop: "2rem" }}
                  required
                  name="name"
                />
                <InputStyle
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  label="Email"
                  required
                  name="email"
                />
                <InputStyle
                  type="text"
                  value={this.state.subject}
                  onChange={this.handleSubject}
                  label="Subject"
                  required
                  name="subject"
                />
                <InputStyle
                  type="text"
                  value={this.state.message}
                  onChange={this.handleMessage}
                  label="Message"
                  multiline
                  rows="5"
                  required
                  name="message"
                />
                <Button
                  variant="outlined"
                  type="submit"
                  value="Submit"
                  style={{
                    marginTop: "3rem",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Send
                </Button>
              </ContactWrap>
            </form>
          </ContactContent>
        </motion.div>
      </ContactPage>
    );
  }
}

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputStyle = styled(TextField)`
  @media (max-width: 700px) {
    align-items: center;
  }
`;

const LabelStyle = styled(InputLabel)``;

const HeaderBg = styled.div`
  background: rgba(0, 0, 0, 0.4) url(${HeaderImg});
  background-blend-mode: multiply;
  height: 40vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ContactContent = styled(Container)`
  margin: 20vh 0;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-top: 10vh;
`;

const ContactWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 80%;
  margin-top: 3rem;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 3rem 0;
  align-items: center;
  -webkit-box-shadow: 7px 6px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 6px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 6px 15px 0px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-family: Dancing Script, cursive;
  font-size: 6rem;
  letter-spacing: 0;
  padding-left: 20px;
  margin-top: 20vh;
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

export default Contact;
