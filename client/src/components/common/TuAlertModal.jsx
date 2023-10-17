import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as styles from './TuAlertModal.css'
import TuButton from './TuButton';

function TuAlertModal() {
  
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <TuButton>Delete account</TuButton>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className={styles.alertDialogOverlay} />
          <AlertDialog.Content className={styles.alertDialogContent}>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialog.Description>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
              <AlertDialog.Cancel asChild>
                <button className="Button mauve">Cancel</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button className="Button red">Yes, delete account</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}

export default TuAlertModal