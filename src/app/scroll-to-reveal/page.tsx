"use client";

const ScrollToRevealPage = () => {
  return (
    <section className="h-[200vh] relative">
      <div
        className="h-screen sticky top-0"
        // style={{
        //   backgroundImage: `url('/Man Skating Luddmyla.jpg')`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center"
        // }}
      >
        <div
          className="text-[10vw] font-black text-transparent bg-clip-text relative"
          style={{
            backgroundImage: `url('/Man Skating Luddmyla.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          Hello there!
          <div className="absolute w-screen h-screen bg-green-400"></div>
        </div>
      </div>
    </section>
  );
};

export default ScrollToRevealPage;
