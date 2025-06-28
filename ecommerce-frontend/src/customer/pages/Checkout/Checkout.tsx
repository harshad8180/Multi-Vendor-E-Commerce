import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import { Style } from "@mui/icons-material";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatewayList = [
  {
    value: "RAZORPAY",
    image:
      "https://episyche.com/_next/image?url=https%3A%2F%2Fepisyche-blog.s3.ap-south-1.amazonaws.com%2FDjango%2FPayments%2FRazorpay%2FOne%20Time%20Payment%2F9%2Fthumbnail_image%2F03b5a151-eff7-487c-8c58-624003d6c741.png&w=1200&q=75",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-stripe-logo-icon-download-in-svg-png-gif-file-formats--online-payment-logos-pack-icons-226458.png?f=webp&w=512",
    label: "",
  },
];



const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [paymentGateway, setPaymentGateway] = useState('RAZORPAY');

  const handlePayementChange = (event:any) => {
    setPaymentGateway(event.target.value);
  }
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>

              <Button onClick={handleOpen}>Add new Address</Button>
            </div>

            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>

              <div className="space-y-3">
                {[1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>

            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>

          <div>
              <div>
                <div className="space-y-3 border p-5 rounded-md">
                    <h1 className="text-primary-color font-medium pb-2 text-center">Choose Payment Gateway</h1>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="flex justify-between pr-0"
                    onChange={handlePayementChange}
                    value={paymentGateway}
                  >
                    {paymentGatewayList.map((item) => (
                      <FormControlLabel
                        className="border w-[45%] pr-2 rounded-md flex justify-center"
                        value={item.value}
                        control={<Radio />}
                        label={
                          <img
                            className={`${
                              item.value == "stripe" ? "w-14" : ""
                            } object-contain`}
                            src={item.image}
                            alt={item.label}
                          />
                        }
                      />
                    ))}
                  </RadioGroup>
                </div>
              </div>
            <div className="border rounded-md">

              <PricingCard />

              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-desciption"
        >
          <Box sx={style}>
            <AddressForm />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Checkout;
