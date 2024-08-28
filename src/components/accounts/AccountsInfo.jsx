import "./AccountsInfo.css";
import Field from "../field/Field";
import useAccounts from "../../hooks/useAccounts";
import Modal from "../modal/Modal";
import RegisterAccountsForm from "./RegisterAccountsForm";
import UpdateAccountsForm from "./UpdateAccountsForm";
import DepositForm from "./DepositForm";
import WithdrawForm from "./WithdrawForm";
import { useEffect, useState } from "react";
import useModal from "../../hooks/useModal";

function AccountsInfo() {
  const { accounts, balance } = useAccounts();
  const { isOpen, openModal } = useModal();
  const [accountsAction, setAccountsAction] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setAccountsAction(null);
      openModal();
    }
  }, [isOpen]);

  return (
    <>
      {accounts ? (
        <div className="fields">
          <Field label="은행" value={accounts?.bank} />
          <Field label="계좌번호" value={accounts?.account} />
          <div className="field">
            <dt className="field-label">잔액</dt>
            <dd className="balance">
              <div className="balance-value">
                {balance ? balance : "0"}<span className="currency">원</span>
              </div>
              <button onClick={() => setAccountsAction("deposit")}>입금</button>
              <button onClick={() => setAccountsAction("withdraw")}>출금</button>
            </dd>
          </div>
          <button onClick={() => setAccountsAction("update")} className="accounts-btn">계좌 수정</button>
        </div>
      ) : (
        <button onClick={() => setAccountsAction("register")} className="accounts-btn">계좌 등록</button>
      )}
      { accountsAction === "register" && (
        <Modal title="계좌 등록" contents={<RegisterAccountsForm />} />
      )}
      {accountsAction === "update" && (
        <Modal title="계좌 수정" contents={<UpdateAccountsForm />} />
      )}
      {accountsAction === "deposit" && (
        <Modal title="입금" contents={<DepositForm />} />
      )}
      {accountsAction === "withdraw" && (
        <Modal title="출금" contents={<WithdrawForm />} />
      )}
    </>
  );
}

export default AccountsInfo;
