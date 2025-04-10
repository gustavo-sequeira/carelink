package br.com.carelink.validator;

import br.com.caelum.stella.validation.CPFValidator;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;


    public class CpfValidatorImpl implements ConstraintValidator<CpfValido, String> {
        @Override
        public boolean isValid(String cpf, ConstraintValidatorContext context) {
            try {
                new CPFValidator().assertValid(cpf);
                return true;
            } catch (Exception e) {
                return false;
            }
        }
    }