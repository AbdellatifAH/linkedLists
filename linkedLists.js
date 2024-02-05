function LinkedList() {
    function Node(value = null, nextNode = null) {
        return { value, nextNode };
    }
    let head = null;
    function prepend(value) {
        head = Node(value, head);
    }
    function append(value) {
        if (head === null) prepend(value);
        else {
            let cur = head;
            while (cur.nextNode != null) cur = cur.nextNode;
            cur.nextNode = Node(value);
        }
    }
    function getSize(node) {
        if (node.value === null) return 0;
        let size = 1;
        let cur = node;
        while (cur.nextNode != null) {
            size += 1;
            cur = cur.nextNode;
        }
        return size;
    }
    function getTail() {
        let cur = head;
        while (cur.nextNode != null) cur = cur.nextNode;
        return cur;
    }
    function getHead() {
        return head;
    }
    function at(index) {
        let cur = head;
        for (let i = 0; i < index; i++) cur = cur.nextNode;
        return cur;
    }
    function pop() {
        let cur = head;
        let prev;
        while (cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
    }
    function contains(value) {
        let cur = head;
        while (cur.nextNode != null) {
            if (cur.value === value) return true;
            cur = cur.nextNode;
        }
        if (cur.value === value) return true;
        return false;
    }
    function find(value) {
        let cur = head;
        let index = 0;
        while (cur.nextNode != null) {
            if (cur.value === value) return index;
            cur = cur.nextNode;
            index += 1;
        }
        if (cur.value === value) return index;
        return null;
    }
    function toString() {
        let cur = head;
        let str = '';
        while (cur.nextNode != null) {
            str += `( ${cur.value} ) -> `;
            cur = cur.nextNode;
        }
        str += 'null';
        return str;
    }
    return {
        prepend,
        append,
        getHead,
        getSize,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
    };
}
