<template>
  <div
    class="sign-up-component"
    :style="`--onboarding-height: ${computedPageHeight}`"
  >
    <div :class="['sign-up-component__left-shadow', { done }]"></div>
    <div :class="['sign-up-component__right-shadow', { done }]"></div>
    <div class="sign-up-component__done">
      <div :class="['sign-up-component__done__icon', { done }]">logo</div>
      <div :class="['sign-up-component__done__signed-up', { done }]">
        <p class="heading">Thanks you for signing up!</p>
        <p class="subtitle">
          Be sure to check your email for the activation link!
        </p>
      </div>
    </div>
    <div class="sign-up-component__progress" v-if="showStepper">
      <stepper-component
        :hoverable="false"
        @manual-go-to="(item) => console.log(item.name)"
        :steps="computedSteps"
      />
    </div>
    <div class="sign-up-component__pages" id="page-component">
      <div
        :class="[
          'sign-up-component__pages__one',
          { 'slide-left': activePage !== 1 },
        ]"
      >
        <div class="sign-up-component__pages__one__intro">
          <p class="sign-up-component__pages__one__intro__header">
            Register and start accepting payments!
          </p>
          <p class="sign-up-component__pages__one__intro__subtitle">
            Sign up and start receiving online payments now! Tons of online
            payment features are just a few clicks a way!
          </p>
        </div>
        <div class="sign-up-component__pages__one__form">
          <div class="sign-up-component__pages__one__form__username">
            <input-component
              @change="usernameChanged"
              :value="stepOneData.username"
              :variant="usernameVariant"
              :sub-text-color="
                !computedUsernameValidation.hasErrors ? 'sub' : 'danger'
              "
              :sub-text="
                !computedUsernameValidation.hasErrors
                  ? ''
                  : computedUsernameValidation.errorMessage
              "
              :show-sub-text="computedUsernameValidation.hasErrors"
              label="Email"
              full
            />
          </div>
          <div class="sign-up-component__pages__one__form__password">
            <input-component
              @change="passwordChanged"
              :value="stepOneData.password"
              label="Password"
              full
              :variant="passwordVariant"
              :sub-text-color="
                !computedPasswordValidation.hasErrors ? 'sub' : 'danger'
              "
              :sub-text="
                !computedPasswordValidation.hasErrors
                  ? ''
                  : computedPasswordValidation.errorMessage
              "
              :show-sub-text="computedPasswordValidation.hasErrors"
            />
          </div>
          <div class="sign-up-component__pages__one__form__account-intro">
            <p>Select Account Type</p>
          </div>
          <div class="sign-up-component__pages__one__form__account-type">
            <contact-card
              v-for="(item, key) in accountTypes"
              :active="item.slug === stepOneData.accountType"
              :icon="item.icon"
              :identifier="item.slug"
              :name="item.name"
              :sub-title="item.description"
              :key="key"
              width="100px"
              height="100px"
              @selected="typeChanged"
            />
          </div>
        </div>
        <div class="sign-up-component__pages__one__submit">
          <button-component
            corners="round"
            variant="info"
            @click="handlePageOneSubmit"
            >Start Now</button-component
          >
        </div>
      </div>

      <div
        :class="[
          'sign-up-component__pages__two',
          { 'in-view': activePage === 2 },
          { 'slide-out': activePage === 3 },
        ]"
      >
        <div class="sign-up-component__pages__two__form">
          <div class="sign-up-component__pages__two__form__input">
            <input-component
              @change="physicalAddressOneChanged"
              :value="stepTwoData.physical_address_1"
              :variant="physicalAddressOneVariant"
              :sub-text-color="
                !computedPhysicalAddressOneValidation.hasErrors
                  ? 'sub'
                  : 'danger'
              "
              :sub-text="
                !computedPhysicalAddressOneValidation.hasErrors
                  ? ''
                  : computedPhysicalAddressOneValidation.errorMessage
              "
              :show-sub-text="computedPhysicalAddressOneValidation.hasErrors"
              label="Physical Street Address"
              full
            />
          </div>
          <div class="sign-up-component__pages__two__form__input">
            <input-component
              @change="physicalAddressTwoChanged"
              :value="stepTwoData.physical_address_2"
              :variant="physicalAddressTwoVariant"
              :sub-text-color="
                !computedPhysicalAddressTwoValidation.hasErrors
                  ? 'sub'
                  : 'danger'
              "
              :sub-text="
                !computedPhysicalAddressTwoValidation.hasErrors
                  ? ''
                  : computedPhysicalAddressTwoValidation.errorMessage
              "
              :show-sub-text="computedPhysicalAddressTwoValidation.hasErrors"
              label="City"
              full
            />
          </div>
          <div class="sign-up-component__pages__two__form__input">
            <input-component
              @change="physicalAddressCountryChanged"
              :value="stepTwoData.physical_address_country"
              :variant="physicalAddressCountryVariant"
              :sub-text-color="
                !computedPhysicalAddressCountryValidation.hasErrors
                  ? 'sub'
                  : 'danger'
              "
              :sub-text="
                !computedPhysicalAddressCountryValidation.hasErrors
                  ? ''
                  : computedPhysicalAddressCountryValidation.errorMessage
              "
              :show-sub-text="
                computedPhysicalAddressCountryValidation.hasErrors
              "
              label="Country"
              full
            />
          </div>
          <div class="sign-up-component__pages__two__form__input">
            <input-component
              @change="physicalAddressCodeChanged"
              :value="stepTwoData.physical_address_code"
              :variant="physicalAddressCodeVariant"
              :sub-text-color="
                !computedPhysicalAddressCodeValidation.hasErrors
                  ? 'sub'
                  : 'danger'
              "
              :sub-text="
                !computedPhysicalAddressCodeValidation.hasErrors
                  ? ''
                  : computedPhysicalAddressCodeValidation.errorMessage
              "
              :show-sub-text="computedPhysicalAddressCodeValidation.hasErrors"
              label="Code"
              full
            />
          </div>
        </div>
        <div class="sign-up-component__pages__two__submit">
          <button-component
            corners="round"
            variant="info"
            @click="handlePageTwoSubmit"
            >Save physical details</button-component
          >
        </div>
      </div>

      <div
        :class="[
          'sign-up-component__pages__three',
          { 'in-view': activePage === 3 },
          { 'slide-out': done },
        ]"
      >
        <div>
          <input-component
            @change="bankChanged"
            :value="stepThreeData.bank"
            :variant="bankVariant"
            :sub-text-color="!bankValidation.hasErrors ? 'sub' : 'danger'"
            :sub-text="
              !bankValidation.hasErrors ? '' : bankValidation.errorMessage
            "
            :show-sub-text="bankValidation.hasErrors"
            label="Bank"
            full
          />
        </div>
        <div>
          <input-component
            @change="branchCodeChanged"
            :value="stepThreeData.branch_code"
            :variant="branchCodeVariant"
            :sub-text-color="
              !computedBranchCodeValidation.hasErrors ? 'sub' : 'danger'
            "
            :sub-text="
              !computedBranchCodeValidation.hasErrors
                ? ''
                : computedBranchCodeValidation.errorMessage
            "
            :show-sub-text="computedBranchCodeValidation.hasErrors"
            label="Branch Code"
            full
          />
        </div>
        <div>
          <input-component
            @change="accountNumberChanged"
            :value="stepThreeData.account_number"
            :variant="accountNumberVariant"
            :sub-text-color="
              !computedAccountNumberValidation.hasErrors ? 'sub' : 'danger'
            "
            :sub-text="
              !computedAccountNumberValidation.hasErrors
                ? ''
                : computedAccountNumberValidation.errorMessage
            "
            :show-sub-text="computedAccountNumberValidation.hasErrors"
            label="Account Number"
            full
          />
        </div>
        <div>
          <input-component
            @change="accountHolderChanged"
            :value="stepThreeData.account_holder"
            :variant="accountHolderVariant"
            :sub-text-color="
              !computedAccountHolderValidation.hasErrors ? 'sub' : 'danger'
            "
            :sub-text="
              !computedAccountHolderValidation.hasErrors
                ? ''
                : computedAccountHolderValidation.errorMessage
            "
            :show-sub-text="computedAccountHolderValidation.hasErrors"
            label="Account Holder"
            full
          />
        </div>
        <div class="sign-up-component__pages__three__submit">
          <button-component
            corners="round"
            variant="info"
            @click="handlePageThreeSubmit"
            >Save Banking Details</button-component
          >
        </div>
      </div>

      <div
        :class="[
          'sign-up-component__pages__four',
          { 'in-view': activePage === 4 },
          { 'slide-out': done },
        ]"
      >
        <div>
          <input-component
            @change="bankChanged"
            :value="stepThreeData.bank"
            :variant="bankVariant"
            :sub-text-color="!bankValidation.hasErrors ? 'sub' : 'danger'"
            :sub-text="
              !bankValidation.hasErrors ? '' : bankValidation.errorMessage
            "
            :show-sub-text="bankValidation.hasErrors"
            label="Bank"
            full
          />
        </div>
        <div class="sign-up-component__pages__four__submit">
          <button-component
            corners="round"
            variant="info"
            @click="handlePageFourSubmit"
            >Next</button-component
          >
        </div>
      </div>

      <div
        :class="[
          'sign-up-component__pages__five',
          { 'in-view': activePage === 5 },
          { 'slide-out': done },
        ]"
      >
        <div class="sign-up-component__pages__five__submit">
          <button-component
            corners="round"
            variant="info"
            @click="handlePageFiveSubmit"
            >Next</button-component
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepperComponent from "../Vue-UI/StepperComponent";
import InputComponent from "../Vue-UI/InputComponent.vue";
import ContactCard from "../Vue-UI/ContactCard.vue";
import ButtonComponent from "@/components/Vue-UI/ButtonComponent";

export default {
  components: {
    StepperComponent,
    InputComponent,
    ContactCard,
    ButtonComponent,
  },
  data() {
    return {
      done: false, // Triggers the close screen
      activePage: 1, // Determines the current form
      stageWithStepper: false, // Shows or hides the stepper
      innerPageHeight: "847px",
      usernameValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      passwordValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      physicalAddressOneValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      physicalAddressTwoValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      physicalAddressCountryValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      physicalAddressCodeValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      postalAddressOneValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      postalAddressTwoValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      postalAddressThreeValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      postalAddressCountryValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      postalAddressCodeValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      bankValidationData: {
        hasErrors: false,
        errorMessage: "",
      },
      branchCodeValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      accountNumberValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      accountHolderValidation: {
        hasErrors: false,
        errorMessage: "",
      },
      accountTypes: [
        {
          name: "Sole Trader",
          description: "For sole proprietors wanting to receive payments",
          slug: "sole_proprieter",
          icon: "person",
        },
        {
          name: "Business Account",
          description: "For registered companies wanting to receive payments",
          slug: "business_account",
          icon: "work",
        },
        {
          name: "Non-Profit",
          description: "For non-profit organisations wanting to raise funds",
          slug: "non_profit",
          icon: "cruelty_free",
        },
        {
          name: "Buyer",
          description:
            "For people wanting to manage their purchases and subscriptions",
          slug: "buyer",
          icon: "payments",
        },
      ],
      stepOne: {
        username: "dsds@ewew.cco",
        password: "dsds@ewew.ccodsds@ewew.cco",
        accountType: "",
        locked: false,
      },
      stepTwo: {
        physical_address_1: "",
        physical_address_2: "",
        physical_address_country: "",
        physical_address_code: "",
        postal_address_1: "",
        postal_address_2: "",
        postal_address_country: "",
        postal_address_code: "",
        same: true,
        locked: false,
      },
      stepThree: {
        bank: "",
        branch_code: "",
        account_number: "",
        account_holder: "",
        locked: false,
      },
    };
  },
  methods: {
    physicalAddressOneChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepTwo.physical_address_1 = item.target.value;
        if (this.stepTwo.same) {
          this.stepTwo.postal_address_1 = item.target.value;
        }
      }
      this.validatePhysicalAddressOne();
    },
    physicalAddressTwoChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepTwo.physical_address_2 = item.target.value;
        if (this.stepTwo.same) {
          this.stepTwo.postal_address_2 = item.target.value;
        }
      }
      this.validatePhysicalAddressTwo();
    },
    physicalAddressCodeChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepTwo.physical_address_code = item.target.value;
        if (this.stepTwo.same) {
          this.stepTwo.postal_address_code = item.target.value;
        }
      }
      this.validatePhysicalAddressCode();
    },
    physicalAddressCountryChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepTwo.physical_address_country = item.target.value;
        if (this.stepTwo.same) {
          this.stepTwo.postal_address_country = item.target.value;
        }
      }
      this.validatePhysicalAddressCountry();
    },
    passwordChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepOne.password = item.target.value;
      }
      this.validatePassword();
    },
    bankChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepThree.bank = item.target.value;
      }
      this.validateBank();
    },
    branchCodeChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepThree.branch_code = item.target.value;
      }
      this.validateBranchCode();
    },
    accountNumberChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepThree.account_number = item.target.value;
      }
      this.validateAccountNumber();
    },
    accountHolderChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepThree.account_holder = item.target.value;
      }
      this.validateAccountHolder();
    },
    usernameChanged(item) {
      if (item.target.value || item.target.value === "") {
        this.stepOne.username = item.target.value;
      }
      this.validateUsername();
    },
    typeChanged(item) {
      this.stepOne.accountType = item;
    },
    handlePageOneSubmit() {
      const errors = [];
      const validations = [
        this.validateUsername,
        this.validatePassword,
        this.validateAccountType,
      ];
      validations.forEach((item) => {
        const result = item();
        if (!result) errors.push(item());
      });

      setTimeout(() => {
        this.calculatePageHeight(this.activePage);
      }, 200);
      if (errors.length > 0) {
        return;
      }
      this.goToPage(2);
      this.stepOne.locked = true;
    },
    handlePageTwoSubmit() {
      const errors = [];
      const validations = [
        this.validatePhysicalAddressOne,
        this.validatePhysicalAddressTwo,
        this.validatePhysicalAddressCountry,
        this.validatePhysicalAddressCode,
      ];
      validations.forEach((item) => {
        const result = item();
        if (!result) errors.push(item());
      });

      setTimeout(() => {
        this.calculatePageHeight(this.activePage);
      }, 200);
      if (errors.length > 0) {
        return;
      }
      this.goToPage(3);
      this.stepTwo.locked = true;
    },
    handlePageThreeSubmit() {
      const errors = [];
      const validations = [
        this.validateBank,
        this.validateBranchCode,
        this.validateAccountNumber,
        this.validateAccountHolder,
      ];
      validations.forEach((item) => {
        const result = item();
        if (!result) errors.push(item());
      });

      setTimeout(() => {
        this.calculatePageHeight(this.activePage);
      }, 200);
      if (errors.length > 0) {
        return;
      }
      this.goToPage(4);
      this.stepThree.locked = true;
    },
    handlePageFourSubmit() {
      // Validate the input fields
      // if (
      //   !this.validateUsername() ||
      //   !this.validatePassword() ||
      //   this.stepOneData.accountType === ""
      // ) {
      //   return;
      // }
      this.goToPage(5);
    },
    handlePageFiveSubmit() {
      // Validate the input fields
      // if (
      //   !this.validateUsername() ||
      //   !this.validatePassword() ||
      //   this.stepOneData.accountType === ""
      // ) {
      //   return;
      // }
      this.done = true;
    },
    validateUsername() {
      const errors = [];
      if (this.stepOneData.username === "") {
        errors.push("Email is required");
      }
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          this.stepOneData.username
        )
      ) {
        errors.push("Invalid email provided");
      }
      if (errors.length) {
        this.usernameValidation.hasErrors = true;
        this.usernameValidation.errorMessage = errors[0];
        return false;
      }
      this.usernameValidation.hasErrors = false;
      this.usernameValidation.errorMessage = "";
      return true;
    },
    validatePassword() {
      const errors = [];
      if (this.stepOneData.password.length < 12) {
        errors.push("Password is required and should be atleast 12 characters");
      }
      if (errors.length) {
        this.passwordValidation.hasErrors = true;
        this.passwordValidation.errorMessage = errors[0];
        return false;
      }
      this.passwordValidation.hasErrors = false;
      this.passwordValidation.errorMessage = "";
      return true;
    },
    validateAccountType() {
      const errors = [];
      if (this.stepOneData.accountType === "") {
        errors.push("Your account type is required");
      }
      console.log(errors);
      if (errors.length > 0) {
        return false;
      }
      return true;
    },
    validatePhysicalAddressOne() {
      const errors = [];
      if (this.stepTwoData.physical_address_1 === "") {
        errors.push("Your store address is required");
      }
      if (errors.length) {
        this.physicalAddressOneValidation.hasErrors = true;
        this.physicalAddressOneValidation.errorMessage = errors[0];
        return false;
      }
      this.physicalAddressOneValidation.hasErrors = false;
      this.physicalAddressOneValidation.errorMessage = "";
      return true;
    },
    validatePhysicalAddressTwo() {
      const errors = [];
      if (this.stepTwoData.physical_address_2 === "") {
        errors.push("Your store city is required");
      }
      if (errors.length) {
        this.physicalAddressTwoValidation.hasErrors = true;
        this.physicalAddressTwoValidation.errorMessage = errors[0];
        return false;
      }
      this.physicalAddressTwoValidation.hasErrors = false;
      this.physicalAddressTwoValidation.errorMessage = "";
      return true;
    },
    validatePhysicalAddressCountry() {
      const errors = [];
      console.log(this.stepTwoData);
      if (this.stepTwoData.physical_address_country === "") {
        errors.push("Your store country is required");
      }
      if (errors.length) {
        this.physicalAddressCountryValidation.hasErrors = true;
        this.physicalAddressCountryValidation.errorMessage = errors[0];
        return false;
      }
      this.physicalAddressCountryValidation.hasErrors = false;
      this.physicalAddressCountryValidation.errorMessage = "";
      return true;
    },
    validatePhysicalAddressCode() {
      const errors = [];
      if (this.stepTwoData.physical_address_code === "") {
        errors.push("Your store city code is required");
      }
      if (errors.length) {
        this.physicalAddressCodeValidation.hasErrors = true;
        this.physicalAddressCodeValidation.errorMessage = errors[0];
        return false;
      }
      this.physicalAddressCodeValidation.hasErrors = false;
      this.physicalAddressCodeValidation.errorMessage = "";
      return true;
    },
    validateBank() {
      const errors = [];
      if (this.stepThreeData.bank === "") {
        errors.push("Your bank name is required");
      }
      if (errors.length) {
        this.bankValidationData.hasErrors = true;
        this.bankValidationData.errorMessage = errors[0];
        return false;
      }
      this.bankValidationData.hasErrors = false;
      this.bankValidationData.errorMessage = "";
      return true;
    },
    validateBranchCode() {
      const errors = [];
      if (this.stepThreeData.branch_code === "") {
        errors.push("Your branch code is required");
      }
      if (errors.length) {
        this.branchCodeValidation.hasErrors = true;
        this.branchCodeValidation.errorMessage = errors[0];
        return false;
      }
      this.branchCodeValidation.hasErrors = false;
      this.branchCodeValidation.errorMessage = "";
      return true;
    },
    validateAccountNumber() {
      const errors = [];
      if (this.stepThreeData.account_number === "") {
        errors.push("Your bank account number is required");
      }
      if (errors.length) {
        this.accountNumberValidation.hasErrors = true;
        this.accountNumberValidation.errorMessage = errors[0];
        return false;
      }
      this.accountNumberValidation.hasErrors = false;
      this.accountNumberValidation.errorMessage = "";
      return true;
    },
    validateAccountHolder() {
      const errors = [];
      if (this.stepThreeData.account_holder === "") {
        errors.push("The name of your bank account holder is required");
      }
      if (errors.length) {
        this.accountHolderValidation.hasErrors = true;
        this.accountHolderValidation.errorMessage = errors[0];
        return false;
      }
      this.accountHolderValidation.hasErrors = false;
      this.accountHolderValidation.errorMessage = "";
      return true;
    },
    calculatePageHeight(page) {
      let panel = document.querySelector(".sign-up-component__pages__one");
      switch (page) {
        case 2:
          panel = document.querySelector(".sign-up-component__pages__two");
          break;
        case 3:
          panel = document.querySelector(".sign-up-component__pages__three");
          break;
        case 4:
          panel = document.querySelector(".sign-up-component__pages__four");
          break;
        case 5:
          panel = document.querySelector(".sign-up-component__pages__five");
          break;
      }
      const height = panel?.scrollHeight;
      this.innerPageHeight = height ? height + "px" : "847px";
    },
    goToPage(page) {
      this.activePage = page;
      if (page > 1 && page < 4) {
        this.stageWithStepper = true;
      }
      setTimeout(() => {
        this.calculatePageHeight(this.activePage);
      }, 1000);
    },
  },
  computed: {
    computedPageHeight() {
      return this.innerPageHeight;
    },
    usernameVariant() {
      return this.computedUsernameValidation.hasErrors ? "danger" : "info";
    },
    passwordVariant() {
      return this.computedPasswordValidation.hasErrors ? "danger" : "info";
    },
    computedUsernameValidation() {
      return this.usernameValidation;
    },
    computedPasswordValidation() {
      return this.passwordValidation;
    },
    physicalAddressOneVariant() {
      return this.computedPhysicalAddressOneValidation.hasErrors
        ? "danger"
        : "info";
    },
    physicalAddressTwoVariant() {
      return this.computedPhysicalAddressTwoValidation.hasErrors
        ? "danger"
        : "info";
    },
    physicalAddressCodeVariant() {
      return this.computedPhysicalAddressCodeValidation.hasErrors
        ? "danger"
        : "info";
    },
    physicalAddressCountryVariant() {
      return this.computedPhysicalAddressCountryValidation.hasErrors
        ? "danger"
        : "info";
    },
    bankVariant() {
      return this.bankValidation.hasErrors ? "danger" : "info";
    },
    branchCodeVariant() {
      return this.computedBranchCodeValidation.hasErrors ? "danger" : "info";
    },
    accountNumberVariant() {
      return this.accountNumberValidation.hasErrors ? "danger" : "info";
    },
    accountHolderVariant() {
      return this.accountHolderValidation.hasErrors ? "danger" : "info";
    },
    bankValidation() {
      return this.bankValidationData;
    },
    computedBranchCodeValidation() {
      return this.branchCodeValidation;
    },
    computedAccountNumberValidation() {
      return this.accountNumberValidation;
    },
    computedAccountHolderValidation() {
      return this.accountHolderValidation;
    },
    computedPhysicalAddressOneValidation() {
      return this.physicalAddressOneValidation;
    },
    computedPhysicalAddressTwoValidation() {
      return this.physicalAddressTwoValidation;
    },
    computedPhysicalAddressCountryValidation() {
      return this.physicalAddressCountryValidation;
    },
    computedPhysicalAddressCodeValidation() {
      return this.physicalAddressCodeValidation;
    },
    stepOneDone() {
      return (
        this.stepOne.username !== "" &&
        this.stepOne.password !== "" &&
        this.stepOne.accountType !== "" &&
        this.stepOne.locked
      );
    },
    stepOneData() {
      return {
        username: this.stepOne.username,
        password: this.stepOne.password,
        accountType: this.stepOne.accountType,
      };
    },
    stepTwoData() {
      return {
        physical_address_1: this.stepTwo.physical_address_1,
        physical_address_2: this.stepTwo.physical_address_2,
        physical_address_country: this.stepTwo.physical_address_country,
        physical_address_code: this.stepTwo.physical_address_code,
        postal_address_1: this.stepTwo.postal_address_1,
        postal_address_2: this.stepTwo.postal_address_2,
        postal_address_country: this.stepTwo.postal_address_country,
        postal_address_code: this.stepTwo.postal_address_code,
        same: this.stepTwo.same,
      };
    },
    stepTwoDone() {
      return (
        this.stepTwo.physical_address_1 !== "" &&
        this.stepTwo.physical_address_2 !== "" &&
        this.stepTwo.physical_address_country !== "" &&
        this.stepTwo.physical_address_code !== "" &&
        this.stepTwo.postal_address_1 !== "" &&
        this.stepTwo.postal_address_2 !== "" &&
        this.stepTwo.postal_address_country !== "" &&
        this.stepTwo.postal_address_code !== "" &&
        this.stepTwo.locked
      );
    },
    stepThreeData() {
      return this.stepThree;
    },
    stepThreeDone() {
      return (
        this.stepThree.bank !== "" &&
        this.stepThree.branch_code !== "" &&
        this.stepThree.account_number !== "" &&
        this.stepThree.account_holder !== "" &&
        this.stepThree.locked
      );
    },
    showStepper() {
      return this.stageWithStepper;
    },
    computedSteps() {
      return [
        {
          icon: "storefront",
          name: "Credentials & Account Type",
          completed: this.stepOneDone,
          active: this.activePage === 1,
        },
        {
          icon: "share_location",
          name: "Address & Business Details",
          completed: this.stepTwoDone,
          active: this.activePage === 2,
        },
        {
          icon: "account_balance",
          name: "Banking & Payout Details",
          completed: this.stepThreeDone,
          active: this.activePage === 3,
        },
        {
          icon: "badge",
          name: "Personal Account Details",
          completed: false,
          active: this.activePage === 4,
        },
        {
          icon: "checklist_rtl",
          name: "Review & Comfirmation",
          completed: false,
          active: this.activePage === 5,
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.sign-up-component {
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  margin: 60px auto;
  box-shadow: 0 0 20px -20px black;
  border-radius: 20px;
  position: relative;
  overflow-x: hidden;
  padding: 40px;
  transition: all 0.8s ease;

  &__left-shadow,
  &__right-shadow {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.8s ease;
    z-index: 2;
    height: var(--onboarding-height);
  }

  &__left-shadow {
    left: calc(-100% - 65px);
    background-color: #fff;
    box-shadow: 20px 0 20px 20px #fff;

    &.done {
      left: -50%;
    }
  }

  &__right-shadow {
    right: calc(-100% - 65px);
    background-color: #fff;
    box-shadow: -20px 0 20px 20px #fff;

    &.done {
      right: -50%;
    }
  }

  &__pages {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: var(--onboarding-height);
    position: relative;
    transition: all 0.8s ease;

    &__one {
      width: 100%;
      transform: translateX(0);
      position: absolute;

      &.slide-left {
        transition: all 1s ease;
        transform: translateX(calc(-100% - 40px));
        height: var(--onboarding-height);
        overflow: hidden;
      }

      &__intro {
        text-align: center;
        width: 100%;

        &__header {
          font-size: 26px;
          color: #0f1828;
          font-family: "Lobster", cursive;
          margin: 0;
        }

        &__subtitle {
          padding: 16px;
          border-radius: 10px;
          cursor: pointer;
          margin: 0;
        }
      }

      &__form {
        max-width: 360px;
        margin: auto;

        &__account-intro {
          font-size: 26px;
          text-align: center;
          width: 100%;
          color: #0f1828;
          font-family: "Lobster", cursive;
        }

        &__account-type {
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          gap: 16px;
        }
      }

      &__submit {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        button {
          font-family: "Lobster", cursive;
        }
      }
    }

    &__two {
      transform: translateX(calc(100% + 40px));
      position: absolute;
      width: 100%;
      height: var(--onboarding-height);

      &.in-view {
        transition: all 1s ease;
        transform: translateX(0);
        height: auto;
      }

      &.slide-out {
        transition: all 1s ease;
        transform: translateX(calc(-100% - 40px));
      }

      &__submit {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        button {
          font-family: "Lobster", cursive;
        }
      }
    }

    &__three {
      transform: translateX(calc(100% + 40px));
      position: absolute;
      width: 100%;
      height: var(--onboarding-height);

      &.in-view {
        transition: all 1s ease;
        transform: translateX(0);
        height: auto;
      }

      &.slide-out {
        transition: all 1s ease;
        transform: translateX(calc(-100% - 40px));
      }

      &__submit {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        button {
          font-family: "Lobster", cursive;
        }
      }
    }

    &__four {
      transform: translateX(calc(100% + 40px));
      position: absolute;
      width: 100%;
      height: var(--onboarding-height);

      &.in-view {
        transition: all 1s ease;
        transform: translateX(0);
        height: auto;
      }

      &.slide-out {
        transition: all 1s ease;
        transform: translateX(calc(-100% - 40px));
      }

      &__submit {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        button {
          font-family: "Lobster", cursive;
        }
      }
    }

    &__five {
      transform: translateX(calc(100% + 40px));
      position: absolute;
      width: 100%;
      height: var(--onboarding-height);

      &.in-view {
        transition: all 1s ease;
        transform: translateX(0);
        height: auto;
      }

      &.slide-out {
        transition: all 1s ease;
        transform: translateX(calc(-100% - 40px));
      }

      &__submit {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        button {
          font-family: "Lobster", cursive;
        }
      }
    }
  }

  &__done {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    pointer-events: none;

    &__icon {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px solid #000;
      background-color: #efefef;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1.5s ease;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      margin: auto;

      &.done {
        animation: fadeIn 1.5s ease forwards;
      }
    }
    &__signed-up {
      border-radius: 50%;
      z-index: 3;
      opacity: 0;
      transition: opacity 2.5s ease;
      text-align: center;

      .heading {
        font-size: 22px;
        font-family: "Lobster", cursive;
        color: #03cd03;
        margin: 22px 0 0;
      }

      .subtitle {
        font-size: 12px;
        color: rgb(163, 163, 163);
        margin: 0;
      }

      &.done {
        animation: fadeIn 2.5s ease forwards;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
