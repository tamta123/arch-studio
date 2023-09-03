import styled, { css } from "styled-components";
import { Arrow } from "@/svg";
import { useNavigate } from "react-router-dom";

type PropsType = {
  title: string;
  buttonText: string;
  to: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description?: string;
};

const HomeBanner: React.FC<PropsType> = ({
  title,
  description,
  buttonText,
  to,
  images: { mobile, tablet, desktop },
}) => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(to);
  };
  return (
    <Wrapper mobile={mobile} tablet={tablet} desktop={desktop}>
      <TextBox description={Boolean(description)}>
        {/* თუ მოვიდა დესქრიფშენია და სტრინგია, ბულიანში თრუთ გადაკეთდება, თუ არ მოვიდა ანდიფაინდი იქნება და როცა ბულიანში გადავა წესით ფოლსი იქნება და ტექსტბოქსის სტაილი ბულიანის სახით გამოიყენებს */}
        <BannerTitle>{title}</BannerTitle>
        {description ? (
          <BannerDescription>{description}</BannerDescription>
        ) : null}
        <ButtonBox onClick={navigationHandler}>
          {/* //ბათონი ლინკიში შემეძლო დამეწერა და თუში მიმეწრა პორტფოლიო თუმცა რაღამც ღილაკის ფორმა აქვს შეგვიძლია ასე დავწეროთ მენიუსგან განსხვავებით*/}
          <Text>{buttonText}</Text>
          <Arrow dark={false}></Arrow>
        </ButtonBox>
      </TextBox>
    </Wrapper>
  );
};

type WrapperProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export default HomeBanner;

const Wrapper = styled.div(
  (props: WrapperProps) => `
    width: 100%;
    height: fit-content;
    background-image: url(${props.mobile});
  `
);

type TextProps = {
  description: boolean;
};

const TextBox = styled.div(
  ({ description }: TextProps) => css`
    width: 100%;
    padding: ${description ? "116px 32px 110px 32px" : "181px 32px 180px 32px"};
    background-color: rgba(0, 0, 0, 0.3499999403953555);
  `
);

const BannerTitle = styled.h2`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 100% */
  letter-spacing: -1.2px;
`;

const BannerDescription = styled.h3`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  margin-top: 11px;
`;

const ButtonBox = styled.button`
  padding: 25px 32px 22px 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  background-color: var(--dark);
  border: none;
  margin-top: 31px;
`;

const Text = styled.h3`
  color: #fff;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 138.889% */
`;
