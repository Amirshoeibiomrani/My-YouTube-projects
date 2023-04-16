const blocks = document.getElementsByClassName('block')
const turn = document.getElementById('turn')
const winner = document.getElementById('winner')
const restart = document.getElementById('restart')

const click_block = function(event) {
    event.preventDefault()
    if (this.textContent !== '') {
        return
    }
    this.textContent = get_sign()
    
    if (check_winner() === 1){
        winner.textContent = "Player 1"
        restart.attributes.removeNamedItem("hidden")
    }else if (check_winner() === 2){
        winner.textContent = "Player2"
        restart.attributes.removeNamedItem("hidden")
    }

}

const get_turn = function() {
    if (turn.textContent === "Player 1: X"){
        turn.textContent = "Player 2: O"
        return 1
    }
    turn.textContent = "Player 1: X"
    return 0
}

const get_sign = function() {
    playerToPlay = get_turn()

    if (playerToPlay === 1){
        return 'X'
    }

    return 'O'
}

const check_winner = function() {
    if (blocks[0].textContent === blocks[3].textContent && blocks[3].textContent === blocks[6].textContent && blocks[6].textContent !== ''){
        if (blocks[3].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[1].textContent === blocks[4].textContent && blocks[4].textContent === blocks[7].textContent && blocks[7].textContent !== ''){
        if (blocks[4].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[2].textContent === blocks[5].textContent && blocks[5].textContent === blocks[8].textContent && blocks[8].textContent !== ''){
        if (blocks[5].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[0].textContent === blocks[1].textContent && blocks[1].textContent === blocks[2].textContent && blocks[2].textContent !== ''){
        if (blocks[1].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[3].textContent === blocks[4].textContent && blocks[4].textContent === blocks[5].textContent && blocks[5].textContent !== ''){
        if (blocks[4].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[6].textContent === blocks[7].textContent && blocks[7].textContent === blocks[8].textContent && blocks[8].textContent !== ''){
        if (blocks[7].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[0].textContent === blocks[4].textContent && blocks[4].textContent === blocks[8].textContent && blocks[8].textContent !== ''){
        if (blocks[4].textContent === 'X'){
            return 1
        }

        return 2
    }else if (blocks[2].textContent === blocks[4].textContent && blocks[4].textContent === blocks[6].textContent && blocks[6].textContent !== ''){
        if (blocks[4].textContent === 'X'){
            return 1
        }

        return 2
    }

    return false
}

const restart_game = function() {
    location.reload()
}



for (let index = 0; index < blocks.length; index++) {
    blocks[index].addEventListener('click', click_block)
    
}

restart.addEventListener('click', restart_game)