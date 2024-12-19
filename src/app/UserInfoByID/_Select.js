export default function Select({ setUserId }) {
  return (
    <>
      <select
        className="form-select mb-4"
        id="select"
        defaultValue={0} // suggested by React - While defaultValue sets an initial value and does not control subsequent updates, the value prop is used for controlled inputs where the React state always drives the value. - https://www.dhiwise.com/post/mastering-defaultvalue-in-react-select-best-practices
        onChange={e => {
          setUserId(e.target.value)
        }}
      >
        <option disabled value="0">
          Select userId
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  )
}
