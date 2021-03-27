import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import quiz from './quiz'

describe('Quiz Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(quiz)
        userConverse = converse.createUser({
            session: {
                message: {
                    source: 'website'
                }
            }
        })
    })

    it('Sample Test', () => {
        return userConverse
            .conversation(
                user `test`,
                bot `Quiz skill works !`
            )
    })
})