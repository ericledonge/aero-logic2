import { useRandomRiddleAdapter } from '../../../app/domain/RandomRiddleAdapter';
import { useRiddleAdapter } from '../../../app/domain/RiddleAdapter';

describe('random riddle display', () => {
    it('see a random riddle', () => {
        cy.injectFakeAdapter(useRandomRiddleAdapter, {
            body: {
                id: '1',
                contents: 'What is the capital of France?',
                answers: [
                    {
                        id: '1',
                        text: 'Paris',
                    },
                ],
            },
            statusCode: 200,
        });

        cy.injectFakeAdapter(useRiddleAdapter, {
            body: {
                id: '1',
                contents: 'What is the capital of France?',
                answers: [
                    {
                        id: '1',
                        text: 'Paris',
                    },
                ],
            },
            statusCode: 200,
        });

        cy.visit('/');

        cy.get("[data-test='work-interval']").should('be.visible');
        cy.get("[data-test='timestamp']").should('be.visible');

        cy.get("[data-test='random-riddle-entry-control']").click();

        cy.url().should('include', '/riddle');
    });
});
