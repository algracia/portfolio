type IntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

function SectionIntro({ eyebrow, title, text }: IntroProps) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default SectionIntro;
