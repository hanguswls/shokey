import useAccounts from "../../hooks/useAccounts";
import InputField from "../field/InputField";
import './AccountsInfo.css';

function UpdateAccountsForm() {
  const { accounts, handleBankChange, handleAcccountChange, handleUpdateAccountsBtnClick } = useAccounts();

  return (
    <form onSubmit={handleUpdateAccountsBtnClick} className="accounts-form">
      <InputField
        type="text"
        id="bank"
        name="bank"
        value={accounts?.bank || ""}
        onChange={handleBankChange}
        placeholder="은행 이름"
        required={true}
      />
      <InputField
        type="text"
        id="accountNumber"
        name="accountNumber"
        value={accounts?.account || ""}
        onChange={handleAcccountChange}
        placeholder="계좌번호"
        required={true}
      />
      <button type="submit" className="form-btn">계좌 수정</button>
    </form>
  );
}

export default UpdateAccountsForm;