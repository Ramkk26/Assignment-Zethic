import React, { useEffect, useState } from "react";
import { List } from "react-virtualized";
import UserData from "./UserData";

const itemsPerPage = 10;
const uniqueCars = [...new Set(UserData.map((user) => user.vMake))];

const PaginatedCarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);
  function disableButton() {
    const startIndex = (currentPage+1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const nextData = uniqueCars.slice(startIndex, endIndex);
    return !nextData.length;
  }
  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(uniqueCars.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePageChange = ({ selectedIndex }) => {
    setCurrentPage(selectedIndex);
  };
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const renderCarRow = ({ index, key, style }) => (
    <div
      className={`row ${selectedCar === paginatedData[index] && "active"}`}
      key={key}
      style={style}
      onClick={() => handleCarClick(paginatedData[index])}
    >
      <span>{paginatedData[index]}</span>
    </div>
  );
  {
    console.log("sele", selectedCar);
  }
  return (
    <>
      <div className="is_flex">
        <div className="pag-list">
          <List
            width={200}
            height={500}
            rowCount={paginatedData.length}
            rowHeight={50}
            rowRenderer={renderCarRow}
          />
          <div className="pagination_action">
            <button
              className={currentPage == 0? "": "pagination_btn"}
              onClick={() =>
                handlePageChange({ selectedIndex: currentPage - 1 })
              }
              disabled={currentPage == 0}
            >
              Previous
            </button>
            <span className="pagination_text">{currentPage + 1}</span>

            <button
              className={disableButton()? "" : "pagination_btn"}
              onClick={() =>
                handlePageChange({ selectedIndex: currentPage + 1 })
              }
              disabled={disableButton()}
            >
              Next
            </button>
          </div>
        </div>

        <div>
          {selectedCar ? (
            <div style={{ marginLeft: 220 }}>
              <h2>{`Users of ${selectedCar}`}</h2>
              <ul className="user-list">
                {UserData.filter((user) => user.vMake === selectedCar).map(
                  (user) => (
                    <li key={user.userId}>{user.username}</li>
                  )
                )}
              </ul>
            </div>
          ) : (
            <div className="paginated_details">
              Click on a car model to show the details...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaginatedCarList;
