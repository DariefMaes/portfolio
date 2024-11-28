import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function IndianEcon() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Indian Economic Research"
          image="/projects/taj2.png"
          subtitle="Using Machine Learning to Analyze and Predict India's GDP Growth Based on Socioeconomic Indicators"
          type={{
            title: "Research",
            color: "bg-red-500",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col w-full gap-12"
        >
          <div className="flex flex-col w-full ">
            <p className="font-light font-poppins pt-5 pb-10 text-gray-700">
              This project explores the use of machine learning to predict GDP
              growth for India. India's economy is projected to become the
              second largest economy in the world by 2075, according to{" "}
              <a
                className="underline text-blue-500"
                href="https://www.goldmansachs.com/insights/articles/how-india-could-rise-to-the-worlds-second-biggest-economy"
              >
                Goldman Sachs
              </a>
              . My model employs socioeconomic indicators such as education
              enrollment rates, public debt ratios, and consumption patterns to
              build a regression model for forecasting GDP. By identifying key
              features and understanding their correlations with GDP growth,
              this model provides insights into economic trends and policy
              planning.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center">
                  <Skill skill="Python" />
                  <Skill skill="Pandas" />
                  <Skill skill="NumPy" />
                  <Skill skill="Seaborn" />
                  <Skill skill="Scikit-learn" />
                  <Skill skill="Data Handling" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Uncover patterns in GDP growth
                </p>
              </div>
            </div>
          </div>
          <ImageCard link="../ss_eda.png" />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <br />
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Data Preprocessing
                </h3>
                <p>
                  Loaded socioeconomic indicators dataset from the World Bank
                  and handled missing values using linear interpolation and
                  backfill methods. Normalized features with Z-score
                  standardization for consistent scaling and enhanced model
                  performance.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Feature Engineering
                </h3>
                <p>
                  Selected key indicators with the highest correlations to GDP
                  growth through statistical analysis. Reduced multicollinearity
                  by examining relationships among features, ensuring robust
                  predictions. Read research papers to understand relationships
                  between features and GDP growth.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Modeling</h3>
                <p>
                  Built a regression model using XGBoost to predict GDP growth.
                  Split the data into training (pre-2010) and testing
                  (post-2010) sets. Evaluated performance using Mean Squared
                  Error (MSE) and correlation coefficient.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Comparison</h3>
                <p>
                  Validated predictions by comparing model outputs with World
                  Bank GDP forecasts, demonstrating the model's accuracy and
                  reliability in economic forecasting.
                </p>
              </li>
            </ol>
          </div>

          <table className="table-auto w-full text-left border-collapse mt-4 text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 font-semibold">Features</th>
                <th className="py-2 px-4 font-semibold text-right">
                  Correlation
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "GDP Growth", correlation: "1.0" },
                {
                  feature: "School Enrollment, Tertiary, Female",
                  correlation: "0.21",
                },
                {
                  feature: "Public and Publicly Guaranteed Debt Service",
                  correlation: "-0.12",
                },
                {
                  feature: "Prevalence of Stunting, Height for Age",
                  correlation: "-0.35",
                },
                {
                  feature: "School Enrollment, Secondary",
                  correlation: "-0.33",
                },
                { feature: "Terms of Trade Adjustment", correlation: "-0.32" },
                { feature: "Inflation, Consumer Prices", correlation: "-0.03" },
                {
                  feature: "Children Out of School, Male",
                  correlation: "-0.37",
                },
                {
                  feature: "Taxes on Goods and Services",
                  correlation: "-0.27",
                },
                {
                  feature: "Pupil-teacher Ratio, Primary",
                  correlation: "-0.22",
                },
                {
                  feature: "Services, Value Added",
                  correlation: "0.72",
                },
                {
                  feature: "GNI Growth",
                  correlation: "1.0",
                },
                {
                  feature: "Final Consumption Expenditure",
                  correlation: "0.85",
                },
                {
                  feature: "Real Interest Rate",
                  correlation: "-0.15",
                },
                {
                  feature: "Changes in Inventories",
                  correlation: "0.41",
                },
                {
                  feature: "Electric Power Consumption",
                  correlation: "0.3",
                },
                {
                  feature: "Air Transport, Passengers Carried",
                  correlation: "0.23",
                },
              ].map(({ feature, correlation }, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 font-light">{feature}</td>
                  <td className="py-2 px-4 text-right font-light">
                    {correlation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Description
            title="Results"
            text="The model achieved an MSE of 5.4% compared to the World Bank's model, that has an MSE of 9.8%. One reason was due to my model's ability to capture the covid dip in 2020, which the World Bank's model failed to do. My model takes in the 19 features from the year before, making it more accurate in predicting the next year's GDP growth. Additionally, my model achieved a correlation coefficient of 0.95, demonstrating the model's accuracy over the years. This research won third place in the 2024 National Student Data Corps Data Science Symposium due to the impacts it can have on the world of Economics."
          />
          <ImageCard height="h-fit" link="../model-graph.png" />
          <ImageCard height="h-fit" link="../wb-graph.png" />
          <Description
            title="Impacts"
            text="This research has the potential to revolutionize the field of economics by providing policymakers with a more accurate and reliable tool for forecasting GDP growth. By identifying key indicators that influence economic performance, this model can inform policy decisions and help governments allocate resources more effectively. Especially in developing countries like India, where economic growth is critical for poverty reduction and social development, this model can play a crucial role in shaping the country's future. Given the fact I was able to design, build, and train this model within a week, the potential for further research and development is immense."
          />
        </motion.div>
      </div>
    </>
  );
}

export default IndianEcon;
