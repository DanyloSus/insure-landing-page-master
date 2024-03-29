interface CardProps {
  img: string;
  h2: string;
  p: string;
}

const Card = ({ img, h2, p }: CardProps) => {
  return (
    <div className="reveal">
      <img src={`./${img}`} alt={img} className="lg:mx-auto" />
      <h2 className="text-3xl my-6">{h2}</h2>
      <p className="text-dark-grayish-violet text-[16px]">{p}</p>
    </div>
  );
};

export default Card;
