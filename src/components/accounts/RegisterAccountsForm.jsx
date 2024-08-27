import useAccounts from "../../hooks/useAccounts";
import InputField from "../field/InputField";
import './AccountsInfo.css';

function RegisterAccountsForm() {
  const { accounts, handleBankChange, handleAcccountChange, handleRegisterAccounts } = useAccounts();

  return (
    <form onSubmit={handleRegisterAccounts} className="accounts-form">
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
      <button type="submit" className="form-btn">계좌 등록</button>
    </form>
  );
}

export default RegisterAccountsForm;