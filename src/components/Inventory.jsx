import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
  // Create add and remove functions here that changes the
  // state.
  let totalval = inv.books + inv.notebooks + inv.pens;
  let handle = (val, prt) => {
    if (prt == "books") {
      if (inv.books == 0 && val == -1) {
        setInv({
          books: inv.books + 0,
          notebooks: inv.notebooks,
          pens: inv.pens,
        });
        return;
      }
      setInv({
        books: inv.books + val,
        notebooks: inv.notebooks,
        pens: inv.pens,
      });
    } else if (prt == "notebooks") {
      if (inv.notebooks == 0 && val == -1) {
        setInv({
          books: inv.books ,
          notebooks: inv.notebooks + 0,
          pens: inv.pens,
        });
        return;
      }
      setInv({
        books: inv.books,
        notebooks: inv.notebooks + val,
        pens: inv.pens,
      });
    } else if (prt == "pens") {
      if (inv.pens == 0 && val == -1) {
        setInv({
          books: inv.books ,
          notebooks: inv.notebooks ,
          pens: inv.pens+ 0,
        });
        return;
      }
      setInv({
        books: inv.books,
        notebooks: inv.notebooks,
        pens: inv.pens + val,
      });
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handle(1, "books");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handle(-1, "books");
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handle(1, "notebooks");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handle(-1, "notebooks");
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handle(1, "pens");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handle(-1, "pens");
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      {/* <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div> */}
      {/*calculate total and show it*/}
      total: {totalval}
    </div>
  );
};
