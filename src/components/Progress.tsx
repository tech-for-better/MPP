import React from "react";
import { PageWrapper, Slogan } from "./Onboarding.styles";
import NavBar from "./NavBar";
import { MultipleLogos } from "./MultipleLogos";
import MyResponsiveBar from "./ChartTest";
const data: {} = [
  {
    country: "AD",
    "hot dog": 41,
    "hot dogColor": "hsl(154, 70%, 50%)",
    burger: 200,
    burgerColor: "hsl(298, 70%, 50%)",
    sandwich: 58,
    sandwichColor: "hsl(240, 70%, 50%)",
    kebab: 199,
    kebabColor: "hsl(43, 70%, 50%)",
    fries: 24,
    friesColor: "hsl(14, 70%, 50%)",
    donut: 36,
    donutColor: "hsl(187, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 158,
    "hot dogColor": "hsl(54, 70%, 50%)",
    burger: 132,
    burgerColor: "hsl(153, 70%, 50%)",
    sandwich: 59,
    sandwichColor: "hsl(5, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(353, 70%, 50%)",
    fries: 170,
    friesColor: "hsl(339, 70%, 50%)",
    donut: 73,
    donutColor: "hsl(132, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 97,
    "hot dogColor": "hsl(202, 70%, 50%)",
    burger: 60,
    burgerColor: "hsl(36, 70%, 50%)",
    sandwich: 91,
    sandwichColor: "hsl(242, 70%, 50%)",
    kebab: 168,
    kebabColor: "hsl(200, 70%, 50%)",
    fries: 151,
    friesColor: "hsl(220, 70%, 50%)",
    donut: 85,
    donutColor: "hsl(230, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 83,
    "hot dogColor": "hsl(218, 70%, 50%)",
    burger: 29,
    burgerColor: "hsl(189, 70%, 50%)",
    sandwich: 61,
    sandwichColor: "hsl(79, 70%, 50%)",
    kebab: 118,
    kebabColor: "hsl(73, 70%, 50%)",
    fries: 182,
    friesColor: "hsl(184, 70%, 50%)",
    donut: 79,
    donutColor: "hsl(326, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 53,
    "hot dogColor": "hsl(151, 70%, 50%)",
    burger: 136,
    burgerColor: "hsl(8, 70%, 50%)",
    sandwich: 45,
    sandwichColor: "hsl(353, 70%, 50%)",
    kebab: 118,
    kebabColor: "hsl(314, 70%, 50%)",
    fries: 187,
    friesColor: "hsl(319, 70%, 50%)",
    donut: 22,
    donutColor: "hsl(125, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 151,
    "hot dogColor": "hsl(358, 70%, 50%)",
    burger: 27,
    burgerColor: "hsl(138, 70%, 50%)",
    sandwich: 65,
    sandwichColor: "hsl(313, 70%, 50%)",
    kebab: 45,
    kebabColor: "hsl(15, 70%, 50%)",
    fries: 168,
    friesColor: "hsl(298, 70%, 50%)",
    donut: 134,
    donutColor: "hsl(306, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 59,
    "hot dogColor": "hsl(98, 70%, 50%)",
    burger: 133,
    burgerColor: "hsl(305, 70%, 50%)",
    sandwich: 120,
    sandwichColor: "hsl(3, 70%, 50%)",
    kebab: 12,
    kebabColor: "hsl(137, 70%, 50%)",
    fries: 18,
    friesColor: "hsl(220, 70%, 50%)",
    donut: 142,
    donutColor: "hsl(44, 70%, 50%)",
  },
];
const Progress = () => {
  return (
    <>
      <PageWrapper>
        <MultipleLogos />
        <Slogan>progress page</Slogan>
        <MyResponsiveBar data={data} />
        <NavBar />
      </PageWrapper>
    </>
  );
};

export default Progress;
