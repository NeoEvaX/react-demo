"use client";

import Modalception from "@/components/Test/ModalOpenModal/modalception";
import MultiselectTest from "@/components/Test/MultselectTest/multiselectTest";
import { Button } from "@/components/ui/Button/Button";
import { MaskedInput } from "@/components/ui/Input/MaskInput";
import Modal from "@/components/ui/Modal/modal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <div className="p-5">
      <Button type="button" onClick={() => setShowModal(true)}>
        Open modal
      </Button>
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          <span>This is text in a modal</span>
          <Modalception />
        </Modal>
      ) : null}
      <div className="mt-5">
        <MultiselectTest />
      </div>
      <MaskedInput
        className="mt-5 w-[500px]"
        maskType="phone"
        placeholder="Phone Number"
      />
      <MaskedInput
        className="mt-5 w-[500px]"
        maskType="date"
        placeholder="Date"
      />
    </div>
  );
}
