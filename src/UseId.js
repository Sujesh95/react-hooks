import React, { useId } from "react";

const Form = () => {
  // Always generates a unique ID per instance of component and it is maintained the same in client and server side rendering as well
  // Due to this, we won't face the hydration issues which we will face if we use Math.random() or some other random ID generators.
  const id = useId();

  return (
    <form>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
    </form>
  );
};

const UseId = () => {
  return (
    <>
      <h1>useId demo</h1>
      <Form />
      <article style={{ marginBlock: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum nibh
        tellus molestie nunc non blandit massa. Ullamcorper eget nulla facilisi
        etiam dignissim. Platea dictumst vestibulum rhoncus est pellentesque
        elit. Aliquet nibh praesent tristique magna sit. Sed libero enim sed
        faucibus. A pellentesque sit amet porttitor eget. At urna condimentum
        mattis pellentesque id nibh tortor id aliquet. Vulputate enim nulla
        aliquet porttitor. Orci nulla pellentesque dignissim enim. Feugiat
        vivamus at augue eget arcu dictum varius duis. Netus et malesuada fames
        ac turpis egestas maecenas pharetra. Dolor morbi non arcu risus quis
        varius. Vitae turpis massa sed elementum tempus. Ullamcorper dignissim
        cras tincidunt lobortis feugiat vivamus at augue eget. Nunc scelerisque
        viverra mauris in aliquam sem fringilla ut morbi. Venenatis tellus in
        metus vulputate eu. Nibh venenatis cras sed felis eget. Eget felis eget
        nunc lobortis mattis aliquam faucibus purus in. Dolor sit amet
        consectetur adipiscing elit pellentesque habitant.
      </article>
      <Form />
    </>
  );
};

export default UseId;
