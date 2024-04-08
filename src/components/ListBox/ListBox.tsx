type ListBoxProps = {
  listItems: string[];
  dropdownPlaceholder: string;
  dropdownLabel: string;
  multipleList: boolean;
  multipleListSize: number;
  inlineDropdown: boolean;
  boxBorder: boolean;
  borderSizeInPixels: number;
  children: React.ReactNode;
};

const ListBox = ({
  listItems,
  dropdownPlaceholder,
  dropdownLabel,
  multipleList,
  multipleListSize,
  inlineDropdown,
  boxBorder,
  borderSizeInPixels,
  children
}: ListBoxProps) => {
  return (
    <article id="dropdown-container"
      className="dropdown-container"
      style={
        boxBorder
          ? { border: `${borderSizeInPixels}px solid black` }
          : { border: "none" }
      }
    >
      {children}
      {/*Show mulilist dropdown*/}
      {multipleList && !inlineDropdown ? (
        <section className="list-box flex-direction-column">
          <label htmlFor="">{dropdownPlaceholder}</label>
          <select
            name={dropdownLabel}
            id="listItems"
            multiple
            size={
              multipleListSize > listItems.length
                ? listItems.length + 1
                : multipleListSize
            }
          >
            <option value="" className="placeholder">
              {dropdownLabel}
            </option>
            {listItems.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </section>
      ) : /*Show normal dropdown*/
        !multipleList && !inlineDropdown ? (
          <section className="list-box flex-direction-column">
            <label htmlFor="">{dropdownLabel}</label>
            <select name={dropdownLabel} id="listItems">
              <option value="" className="placeholder">
                {dropdownPlaceholder}
              </option>
              {listItems.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </section>
        ) : /*Showing inlineDropdown*/
          !multipleList && inlineDropdown ? (
            <section className="list-box flex-direction-row">
              <label htmlFor="">{dropdownLabel}</label>
              <select name={dropdownLabel} id="listItems">
                <option value="" className="placeholder">
                  {dropdownPlaceholder}
                </option>
                {listItems.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </section>
          ) : (
            multipleList &&
            inlineDropdown && (
              <section className="list-box flex-direction-row">
                <label htmlFor="">{dropdownLabel}</label>
                <select
                  name={dropdownLabel}
                  id="listItems"
                  multiple
                  size={
                    multipleListSize > listItems.length
                      ? listItems.length + 1
                      : multipleListSize
                  }
                >
                  <option value="" className="placeholder">
                    {dropdownPlaceholder}
                  </option>
                  {listItems.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </section>
            )
          )}

    </article>

    // next statement
  );
};

export default ListBox;
