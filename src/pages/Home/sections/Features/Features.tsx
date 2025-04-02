import style from "./Features.module.css";
import { CardsInfo } from "./Cards.info";
import { FeaturesCard } from "../../../../components/Card";

export const Features = () => {
  return (
    <section className={style.features}>
      <picture className={style.imageContainer}>
        <source srcSet="/images/features/feat-image.jpg" type="image/webp" />
        <img
          src="/images/features/feat-image.jpg"
          alt="Happy customer reviewing insurance documents"
          loading="lazy"
          className={style.featureImage}
        />
      </picture>
      
      <div className={style.content}>
        <div className={style.intro}>
          <h1>Getting Insured Is Simple & Fast</h1>
          <p>
            Follow these easy steps to secure your insurance plan today. No
            complicated paperwork, no hidden fees - just reliable coverage in
            minutes!
          </p>
        </div>

        <div className={style.stepsContainer}>
          {CardsInfo.map((step, index) => (
            <FeaturesCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
