import useAccounts from "../../hooks/useAccounts";
import InputField from "../field/InputField";
import './AccountsInfo.css';

function DepositForm() {
  const { amount, handleAmountChange, handleDepositBtnClick } = useAccounts();

  return (
    <form onSubmit={handleDepositBtnClick} className="accounts-form">
      <InputField
        type="number"
        id="depositAmount"
        name="depositAmount"
        value={amount}
        onChange={handleAmountChange}
        placeholder="입금액을 입력하세요"
        required={true}
      />
      <button type="submit" className="form-btn">입금</button>
    </form>
  );
}

export default DepositForm;