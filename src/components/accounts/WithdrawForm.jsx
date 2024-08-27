import useAccounts from "../../hooks/useAccounts";
import InputField from "../field/InputField";
import './AccountsInfo.css';

function WithdrawForm() {
  const { amount, handleAmountChange, handleWithdraw } = useAccounts();

  return (
    <form onSubmit={handleWithdraw} className="accounts-form">
      <InputField
        type="number"
        id="withdrawAmount"
        name="withdrawAmount"
        value={amount}
        onChange={handleAmountChange}
        placeholder="출금액을 입력하세요"
        required={true}
      />
      <button type="submit" className="form-btn">출금</button>
    </form>
  );
}

export default WithdrawForm;