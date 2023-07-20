"use client";

import Modalception from "@/components/Test/ModalOpenModal/modalception";
import MultiselectTest from "@/components/Test/MultselectTest/multiselectTest";
import { Button } from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Modal/modal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button className="ml-5" type="button" onClick={() => setShowModal(true)}>
        Open modal
      </Button>
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          <span>This is text in a modal</span>
          <Modalception />
        </Modal>
      ) : null}
      <div className="ml-5 mt-5">
        <MultiselectTest />
      </div>
    </div>
  );
}
