"use client";

import { Button } from "../Button/Button";
import { useState } from "react";

type ModalProps = {
  className?: string;
  children?: React.ReactNode;
  setShowModal: (showModal: boolean) => void;
};

const Modal = ({ className, children, setShowModal }: ModalProps) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-6xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-3">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <Button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-80 outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-80 outline-none focus:outline-none">
                  ×
                </span>
              </Button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-3">{children}</div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-3">
              <Button
                className="mr-1 px-6 py-2"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
              <Button
                className="mr-1 px-6 py-3"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default Modal;
