"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [character, setChar] = useState({});
  const [sortedChar, setSortedChar] = useState([]);

  const data =
    "AALSADDNKNKBKFWODKAJEANFKNEWFWFJWEFHLWEJFEMASCNDBFBVDSVJA";

  const alphabetCount = () => {
    const count = {};
    for (let item of data) {
      if (item >= "A" && item <= "Z") {
        count[item] = (count[item] || 0) + 1;
      }
    }
    setChar(count);

    const sorted = Object.entries(count).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    setSortedChar(sorted);
  };

  useEffect(() => {
    alphabetCount();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center font-bold">Hello Purwadhika Student</div>
      <div className="mt-4">
        <table>
          <tbody>
            {sortedChar.map(([char, count]) => (
              <tr key={char}>
                <td>{char} :</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}