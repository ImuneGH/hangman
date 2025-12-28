const GallowsImg = () => {
  const Base = () => <line x1="10" y1="70" x2="40" y2="70" stroke="black" strokeWidth="2" />;
  const Pole = () => <line x1="25" y1="70" x2="25" y2="10" stroke="black" strokeWidth="2" />;
  const Beam = () => {
    return (
      <>
        <line x1="24" y1="10" x2="60" y2="10" stroke="black" strokeWidth="2" />
        <line x1="25" y1="25" x2="40" y2="10" stroke="black" strokeWidth="2" />
      </>
    );
  };
  const Rope = () => <line x1="59" y1="10" x2="59" y2="30" stroke="black" strokeWidth="2" />;
  const Head = () => <circle cx={59} cy={35} r={5} stroke="black" strokeWidth={1} fill="none" />;
  const Body = () => <line x1="59" y1="40" x2="59" y2="50" stroke="black" strokeWidth="2" />;
  const Arms = () => {
    return (
      <>
        <line x1="59" y1="40" x2="53" y2="46" stroke="black" strokeWidth="2" />
        <line x1="59" y1="40" x2="65" y2="46" stroke="black" strokeWidth="2" />
      </>
    );
  };
  const Legs = () => {
    return (
      <>
        <line x1="59" y1="50" x2="55" y2="57" stroke="black" strokeWidth="2" />
        <line x1="59" y1="50" x2="63" y2="57" stroke="black" strokeWidth="2" />
      </>
    );
  };

  return (
    <svg viewBox="0 0 80 80" width="80" height="80">
      <Base />
      <Pole />
      <Beam />
      <Rope />
      <Head />
      <Body />
      <Arms />
      <Legs />
    </svg>
  );
};

export default GallowsImg;
