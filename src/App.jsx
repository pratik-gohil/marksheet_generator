import { useEffect, useRef } from "react";
import "./App.css";
import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";

function App() {
  const result = useRef(null);

  useEffect(() => {}, []);

  const getResult = ({ as }) => {
    // To Image
    toJpeg(result.current, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "result.jpeg";
      link.href = dataUrl;

      if (as === "pdf") {
        // PDF
        const pdf = new jsPDF({
          orientation: "landscape",
        });
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
        pdf.save("result.pdf");
      } else {
        link.click();
      }
    });
  };

  return (
    <div
      className="
    p-4"
    >
      <div className="flex gap-2 mb-4">
        <button
          className="border py-2 px-4 bg-slate-200 hover:bg-slate-400"
          onClick={() => getResult({ as: "jpeg" })}
        >
          Download as JPEG
        </button>
        <button
          className="border py-2 px-4 bg-slate-200 hover:bg-slate-400"
          onClick={() => getResult({ as: "pdf" })}
        >
          Download as PDF
        </button>
      </div>
      <div ref={result} className="bg-[#fffcc8] w-full">
        <header className="flex justify-between p-4">
          <img src="/logo.png" className="w-24 h-24" />
          <div
            className="
            text-center flex-1"
          >
            <span className="font-medium">University Of Mumbai</span>
            <h1 className="text-[#db2016] text-4xl mb-2 font-semibold">
              Kapol Vidyanidhi College Of Hotel Management{" "}
              <span className="text-sm">ISO 9001 : 2015 Certified</span>
            </h1>
            <h1 className="ribbon bg-[#db2016] text-white py-1 px-2 mx-auto w-fit font-medium">
              Temple Of Knowledge
            </h1>
            <div className="font-medium mt-8">
              <p>(Affiliated to the University of Mumbai)</p>
              <p>Mahavir Nagar, Kandivali(W), Mumbai - 400 067, M.S.(INDIA)</p>
              <p className="font-bold text-lg">GRADE CARD</p>
            </div>
          </div>
        </header>
        <main className="p-12 pt-0">
          <table className="w-full text-center font-medium text-sm">
            <thead></thead>
            <tbody>
              <tr>
                <td className="text-left" colSpan={4}>
                  PROGRAMME: Bachelor of Computer Science
                </td>
                <td colSpan={6}>SEMESTER II</td>
              </tr>
              <tr>
                <td rowSpan={2}></td>
                <td>PRN/Reg No.</td>
                <td>Examination Seat No.</td>
                <td colSpan={4}>Name of the Learner</td>
                <td colSpan={3}>Month & Year of Examination</td>
              </tr>
              <tr>
                <td>202001640054612</td>
                <td>3361305</td>
                <td colSpan={4}>PRATIK RAMESH GOHIL (GEETA)</td>
                <td colSpan={3}>March 2021</td>
              </tr>
              <tr>
                <td rowSpan={2}>Course Code</td>
                <td rowSpan={2}>Course Title</td>
                <td rowSpan={2}>Course Credited</td>
                <td colSpan={3}>Grade</td>
                <td rowSpan={2}>Credits Earned(C)</td>
                <td rowSpan={2}>Grade Points(G)</td>
                <td rowSpan={2}>(C x G)</td>
                <td rowSpan={2}>SGPI = ∑CG/∑C</td>
              </tr>
              <tr>
                <td>TH/PR</td>
                <td>IA</td>
                <td>OVERALL</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
                <td rowSpan={9}>9.30</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">
                  Statitics Methods & Testing of Hypothesis
                </td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td className="text-left">USC201</td>
                <td className="text-left">Programming with C</td>
                <td>2</td>
                <td>A+</td>
                <td>O</td>
                <td>A+</td>
                <td>2</td>
                <td>9</td>
                <td>18</td>
              </tr>
              <tr>
                <td colSpan={2}>Total</td>
                <td>20</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Remark:</td>
                <td>Successful</td>
                <td></td>
                <td>Credits Earned</td>
                <td>20</td>
                <td colSpan={3}>SGPI: 9.30</td>
                <td>Overall Grade:-</td>
                <td>A+</td>
              </tr>
              <tr>
                <td colSpan={5}>Sem I: Credits Earned - 20 SGPI - 9.60</td>
                <td colSpan={5}>Sem I: Credits Earned - 20 SGPI - 9.60</td>
              </tr>
              <tr>
                <td colSpan={5}>Sem I: Credits Earned - 20 SGPI - 9.60</td>
                <td colSpan={5}>Sem I: Credits Earned - 20 SGPI - 9.60</td>
              </tr>
            </tbody>
          </table>
          <div className="border border-t-0 border-black font-medium">
            <div className="flex justify-evenly">
              <div className="!border-0 p-4" colSpan={2}>
                Checked by
              </div>
              <div className="!border-0 p-4" colSpan={3}>
                Chairperson, Exam Comm
              </div>
              <div className="!border-0 p-4" colSpan={2}>
                Seal of the college
              </div>
              <div className="!border-0 p-4" colSpan={3}>
                Principle
              </div>
            </div>
            <div className="p-1">
              Place : Mumbai <br />
              Date : 7/6/2021
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
