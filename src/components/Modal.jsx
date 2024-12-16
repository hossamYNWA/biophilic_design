import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalVariant,
} from "@patternfly/react-core";

export const ModalWithDropdown = ({ passUserData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isPurposeDropdownOpen, setIsPurposeDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null); // State for selected role from dropdown value
  const [selectedPurpose, setSelectedPurpose] = useState(null); // State for selected purpose from dropdown value

  // Open modal on component mount
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalToggle = () => {
    if (selectedRole !== null && selectedPurpose !== null) {
      setIsModalOpen(!isModalOpen);
      passUserData(selectedRole, selectedPurpose);
    } else {
      alert("Please select a role and purpose");
    }
  };

  const onSelectRole = (event, value) => {
    setSelectedRole(value); // Update the selected value
    setIsRoleDropdownOpen(false);
    onFocus();
  };

  const onSelectPurpose = (event, value) => {
    setSelectedPurpose(value); // Update the selected value
    setIsPurposeDropdownOpen(false);
    onFocus();
  };

  const onFocus = () => {
    const element = document.getElementById("modal-dropdown-toggle");
    if (element) {
      element.focus();
    }
  };

  const onEscapePress = (event) => {
    if (isRoleDropdownOpen) {
      setIsRoleDropdownOpen(false);
      onFocus();
    } else if (isPurposeDropdownOpen) {
      setIsPurposeDropdownOpen(false);
      onFocus();
    } else {
      // Prevent closing the modal if no selection has been made
      if (selectedRole === null || selectedPurpose === null) {
        event.preventDefault();
      } else {
        handleModalToggle(event);
      }
    }
  };

  const dropdownStyle = {
    border: '1px solid rgb(48, 74, 13)',
    boxShadow: 'none',

  };

  const toggleStyle = {
    border: '1px solid rgb(48, 74, 13) !important' ,
    outline: 'none',
    margin: '0px 10px',
    '&:focus': {
        border: '1px solid rgb(48, 74, 13)',
        boxShadow: 'none',
        backgroundColor: 'yellow'
      }  };

  return (
    <>
      <Modal
        variant={ModalVariant.small}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onEscapePress={onEscapePress}
        aria-labelledby="modal-with-dropdown"
        aria-describedby="modal-box-body-with-dropdown"
        style={{ color: "rgb(48, 74, 13)" }}
      >
        <ModalHeader
          title="User purpose and role"
          labelId="modal-with-dropdown"
        />
        <ModalBody id="modal-box-body-with-dropdown">
          <div>
            please choose from below your professional role and purpose of using
            this app
          </div>
          <br />
          <div>
            <Dropdown
              isOpen={isRoleDropdownOpen}
              onSelect={onSelectRole}
              onOpenChange={(isOpen) => setIsRoleDropdownOpen(isOpen)}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  isExpanded={isRoleDropdownOpen}
                  id="modal-dropdown-toggle-role" 
                  style={toggleStyle}
                >
                  {selectedRole || "Select Role"}
                </MenuToggle>
              )}
              style={dropdownStyle} 
            >
              <DropdownList>
                <DropdownItem
                  value={0}
                  key="role1"
                  onClick={(ev) => onSelectRole(ev, "Role 1")}
                >
                  Role 1
                </DropdownItem>
                <DropdownItem
                  value={1}
                  key="role2"
                  onClick={(ev) => onSelectRole(ev, "Role 2")}
                >
                  Role 2
                </DropdownItem>
                <DropdownItem
                  value={2}
                  key="role3"
                  onClick={(ev) => onSelectRole(ev, "Role 3")}
                >
                  Role 3
                </DropdownItem>
              </DropdownList>
            </Dropdown>

            <Dropdown
              isOpen={isPurposeDropdownOpen}
              onSelect={onSelectPurpose}
              className="dropdown-custom" // Add custom class for dropdown
              onOpenChange={(isOpen) => setIsPurposeDropdownOpen(isOpen)}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() =>
                    setIsPurposeDropdownOpen(!isPurposeDropdownOpen)
                  }
                  isExpanded={isPurposeDropdownOpen}
                  id="modal-dropdown-toggle-purpose"
                  style={toggleStyle}
                >
                  {selectedPurpose || "Select Purpose"}
                </MenuToggle>
              )}
              style={dropdownStyle}
            >
              <DropdownList>
                <DropdownItem
                  value={0}
                  key="purpose1"
                  onClick={(ev) => onSelectPurpose(ev, "Purpose 1")}
                >
                  Purpose 1
                </DropdownItem>
                <DropdownItem
                  value={1}
                  key="purpose2"
                  onClick={(ev) => onSelectPurpose(ev, "Purpose 2")}
                >
                  Purpose 2
                </DropdownItem>
                <DropdownItem
                  value={2}
                  key="purpose3"
                  onClick={(ev) => onSelectPurpose(ev, "Purpose 3")}
                >
                  Purpose 3
                </DropdownItem>
              </DropdownList>
            </Dropdown>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            key="confirm"
            variant="primary"
            onClick={handleModalToggle}
            disabled={selectedRole === null || selectedPurpose === null}
            style={{ backgroundColor: "rgb(48, 74, 13)", color: "white" }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalWithDropdown;
