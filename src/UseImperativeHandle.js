import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Modal = forwardRef(({ open }, ref) => {
  const closeRef = useRef(null);
  const confirmRef = useRef(null);
  const denyRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focusClose: () => closeRef.current?.focus(),
      focusConfirm: () => confirmRef.current?.focus(),
      focusDeny: () => denyRef.current?.focus(),
    }),
    []
  );

  if (!open) return null;

  return (
    <div>
      <h1>Modal component</h1>
      <button ref={closeRef}>&times;</button>
      <button ref={confirmRef}>Confirm</button>
      <button ref={denyRef}>Deny</button>
    </div>
  );
});

const UseImperativeHandle = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  return (
    <div>
      <h1>useImperativeHandle demo</h1>
      <button onClick={() => setOpen((p) => !p)}>
        {open ? "Close" : "Open"} modal
      </button>
      <button onClick={() => modalRef.current?.focusClose()}>
        Focus close
      </button>
      <button onClick={() => modalRef.current?.focusConfirm()}>
        Focus confirm
      </button>
      <button onClick={() => modalRef.current?.focusDeny()}>Focus deny</button>
      <Modal ref={modalRef} open={open} />
    </div>
  );
};

export default UseImperativeHandle;
