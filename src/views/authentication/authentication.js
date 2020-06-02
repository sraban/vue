import { required, requiredIf, email, maxLength, minLength, sameAs } from "vuelidate/lib/validators";
import { numeric, isPasswordStrong } from "@/validators";

//const { required, minLength, email } = window.validators

export default {
  name: 'authentication',
  components: {},
  props: [],
  data () {
    return {
        submitted: false,
        user: {
          company: 'Light dashboard',
          username: '',
          password: '',
          cnfpassword: '',
          email: '',
          firstName: '',
          lastName: '',
          address: 'Melbourne, Australia',
          city: 'BBI',
          country: 'IN',
          postalCode: '',
          term: true,
          gender: 'M',
          aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        }
    }
  },
  validations: {
    user: {
      username: {
        required,
        numeric,
        minLength: minLength(2), 
        maxLength: maxLength(10) 
      },
      email: {
        requiredIf: requiredIf(function () {
          return true
        }),
        email
      },
      firstName:{
        required
      },
      password:{
        required,
        isPasswordStrong
      },
      cnfpassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    updateProfile () {
      this.submitted = true;

      this.$v.user.$touch()
      this.$v.user.$pending
      this.$v.user.$error
      this.$v.user.$valid
      this.$v.user.$invalid

      //let empty = !this.$v.user.$anyDirty
      //let errors = this.$v.user.$anyError

      if ( !this.$v.user.$invalid ) {
        alert('Your data: ' + JSON.stringify(this.user))
      } else {
        alert('Not Valid');
      }

    }
  }
}


