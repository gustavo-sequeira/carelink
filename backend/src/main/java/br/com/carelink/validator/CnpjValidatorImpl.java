package br.com.carelink.validator;

import br.com.caelum.stella.validation.CNPJValidator;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CnpjValidatorImpl implements ConstraintValidator<CnpjValido, String> {
    @Override
    public boolean isValid(String cnpj, ConstraintValidatorContext context) {
        try {
            new CNPJValidator().assertValid(cnpj);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}

