import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import HeaderImg from "../../images/hero-img.jpg";
import MomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { motion } from "framer-motion";

import emailjs from "emailjs-com";

class Reservation extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      groupSize: "",
      timeAndDate: "",
      phoneNumber: "",
      email: "",
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleGroup = (event) => {
    this.setState({ groupSize: event.target.value });
  };

  handleTimeDate = (event) => {
    let timeDate = String(event.format("MMMM Do YYYY, h:mm a"));

    this.setState({
      timeAndDate: timeDate,
    });
  };

  handlePhone = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleSubmit = (event) => {
    alert(
      `Ok ${this.state.name}, we will see you on ${this.state.timeAndDate} for a party of ${this.state.groupSize}. Thank you!`
    );

    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_KxFrsPwo",
        ".reserve-form",
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
      groupSize: "",
      timeAndDate: "",
      phoneNumber: "",
      email: "",
    });
  };

  render() {
    return (
      <ReservationPage>
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
          <Title>Reservations</Title>
          <ResContent>
            <form onSubmit={this.handleSubmit} className="reserve-form">
              <ResWrap>
                <span
                  style={{
                    fontFamily: "Dancing Script, cursive",
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  Book An Experience
                </span>

                <Grid
                  container
                  xs={12}
                  direction={
                    window.matchMedia("(max-width: 700px)").matches
                      ? "column"
                      : "row"
                  }
                  style={{ justifyContent: "space-evenly" }}
                >
                  <ReservationPage
                    container
                    direction="column"
                    xs={6}
                    justify="center"
                    alignItems="center"
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <InputStyle
                      type="text"
                      value={this.state.name}
                      onChange={this.handleName}
                      required
                      label="Name"
                      name="name"
                    />

                    <InputStyle
                      type="email"
                      value={this.state.email}
                      onChange={this.handleEmail}
                      label="Email"
                      required
                      style={{ margin: "3rem 0" }}
                      name="email"
                    />

                    <InputStyle
                      type="tel"
                      value={this.state.phoneNumber}
                      onChange={this.handlePhone}
                      required
                      label="Phone Number"
                      name="phoneNumber"
                    />
                  </ReservationPage>
                  <ReservationPage
                    container
                    direction="column"
                    xs={6}
                    justify="center"
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DateTimePicker
                        onChange={this.handleTimeDate}
                        ampm
                        style={{ marginTop: "3rem" }}
                        label="When"
                        name="dateTime"
                      />
                    </MuiPickersUtilsProvider>
                    <InputLabel id="groupSize" style={{ marginTop: "3rem" }}>
                      Guest
                    </InputLabel>
                    <Select
                      labelId="groupSize"
                      value={this.state.groupSize}
                      onChange={this.handleGroup}
                      name="groupSize"
                    >
                      <MenuItem value={"1 to 2"}>1-2</MenuItem>
                      <MenuItem value={"3 to 4"}>3-4</MenuItem>
                      <MenuItem value={"4 to 8"}>4-8</MenuItem>
                    </Select>
                  </ReservationPage>
                </Grid>
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
                  Book It!
                </Button>
              </ResWrap>
            </form>
          </ResContent>
        </motion.div>
      </ReservationPage>
    );
  }
}

const ReservationPage = styled.div`
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
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ResContent = styled(Container)`
  margin: 20vh 0;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-top: 10vh;
`;

const ResWrap = styled(Container)`
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

export default Reservation;
