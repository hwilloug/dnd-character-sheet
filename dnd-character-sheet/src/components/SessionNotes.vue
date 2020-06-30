<template>
<div id="session-notes">
  <h2>Session Notes</h2>
    <div class="session-notes-interface">
    <v-navigation-drawer
    class="session-nav"
    color="transparent"
    height="30rem"
    dark
    stateless
    permanent
    >
      <ul>
        <li
          v-for="session in sessionNotes"
          :key="sessionNotes.indexOf(session)"
          @click="selectSession(session)"
          :class="{ selected: isSelected(session) }"
        >{{ session.date }}<br>{{ session.title }}</li>
      </ul>
      <template v-slot:append>
        <button @click="addNewSession()"><v-icon color="black">mdi-calendar-plus</v-icon>New Session</button>
      </template>
    </v-navigation-drawer>
    <div class="individual-session" v-if="showDatePicker">
      <div class="session-header">
        <input
          v-model="selectedSession.title"
          @keyup="updateSessionNotes()"
          class="session-title"
        />
        <v-menu
          v-model="datePickerModal"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="selectedSession.date"
              label="Session Date"
              readonly
              v-bind="attrs"
              v-on="on"
              style="float: right;"
              color="green"
              class="date-selector"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="selectedSession.date"
            @input="datePickerModal = false"
            color="green"
            @change="updateSessionNotes()"
          ></v-date-picker>
        </v-menu>
      </div>
      <textarea
        v-model="selectedSession.notes"
        class="session-notes"
        @keyup="updateSessionNotes()"
      ></textarea>
      <div class="session-footer">
        <div>
          <v-icon @click="nextSession('first')">mdi-chevron-double-left</v-icon>
          <v-icon @click="nextSession('down')">mdi-arrow-left-circle</v-icon>
          <v-icon @click="nextSession('up')">mdi-arrow-right-circle</v-icon>
          <v-icon @click="nextSession('last')">mdi-chevron-double-right</v-icon>
        </div>
        <button @click.stop="dialog = true">
          <v-icon color="black">mdi-calendar-remove</v-icon>Delete Session
        </button>
        <v-dialog
           v-model="dialog"
           max-width="290"
         >
           <v-card>
             <v-card-title class="headline">Delete Session?</v-card-title>
             <v-card-text>
               Are you sure you want to delete this session?
             </v-card-text>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn
                 color="green darken-1"
                 text
                 @click="dialog = false"
               >
                 No
               </v-btn>
               <v-btn
                 color="red darken-1"
                 text
                 @click="deleteSelectedSession"
               >
                 Yes
               </v-btn>
             </v-card-actions>
           </v-card>
         </v-dialog>
      </div>
    </div>
    <div v-else><v-icon>mdi-arrow-left</v-icon>Select a session on the left, or click to create a new one!</div>
  </div>
</div>
</template>

<script>
export default {
  name: "sessionNotes",
  props: ["sessionNotes"],
  data() { return {
    selectedSession: {
      date: "",
      title: "",
      notes: "",
    },
    selectedSessionId: "",
    datePickerModal: false,
    showDatePicker: false,
    dialog: false
  }},
  methods: {
    selectSession(session) {
      this.selectedSession = session;
      this.selectedSessionId = this.sessionNotes.indexOf(session);
      this.showDatePicker = true;
    },
    updateSessionNotes() {
      this.sessionNotes[this.selectedSessionId] = this.selectedSession;
      this.$emit('update-session-notes', this.sessionNotes);
    },
    addNewSession() {
      const today = new Date();

      const newSessionInfo = {
        date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
        title: "New Session",
        notes: "Insert session notes here!"
      };
      this.sessionNotes.push(newSessionInfo);

      this.selectSession(newSessionInfo);

      this.updateSessionNotes();
    },
    deleteSelectedSession() {
      this.dialog = false;
      let allNotes = this.sessionNotes;
      allNotes.splice(this.selectedSessionId, 1);
      this.sessionNotes = allNotes;
      this.nextSession('down');
      this.updateSessionNotes();
    },
    isSelected(session) {
      return this.selectedSessionId === this.sessionNotes.indexOf(session)
    },
    nextSession(direction) {
      const currentId = this.selectedSessionId;
      let newId = null;

      const maxId = this.sessionNotes.length - 1;
      const minId = 0;

      switch (direction) {
        case 'up':
          newId = currentId + 1;
          newId = newId > maxId ? maxId : newId;
          break;
        case 'down':
          newId = currentId - 1;
          newId = newId < minId ? minId : newId;
          break;
        case 'first':
          newId = 0;
          break;
        case 'last':
          newId = maxId;
          break;
      }
      const newSession = this.sessionNotes[newId];
      this.selectSession(newSession);
    }
  }
}
</script>

<style>
#session-notes {
  margin: 10px 10%;
  background-image: url('../assets/pillar_text_frame.png');
  background-size: 100% 100%;
}

#session-notes h2 {
  text-align: center;
  padding-top: 50px;
}

#session-notes .session-notes-interface {
    display: flex;
    flex-direction: row;
    padding: 40px 120px 60px 120px;
}

#session-notes .session-nav {
  padding: 5px;
}

#session-notes .session-nav h2 {
  color: white;
}

#session-notes .session-nav hr {
  margin: 3px;
  color: white;
}

#session-notes .session-nav ul {
  list-style-type: none;
  padding: 0;
}

#session-notes .session-nav li {
  color: darkred;
  text-align: center;
  margin: 5px;
  background-image: url('../assets/small_scroll_horizontal.png');
  background-size: 100% 100%;
  padding: 5px 30px;
}

#session-notes .session-nav li:hover {
  cursor: pointer;
}

#session-notes .session-nav .selected {
  font-weight: bold;
}

#session-notes .individual-session {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

#session-notes .session-header {
  display: flex;
}

#session-notes .session-title {
  font-size: 20px;
  font-weight: bold;
  flex: 1;
}

#session-notes .date-selector {
  flex: 0 0 30%;
}

#session-notes .session-notes {
  border-top: 2px solid darkred;
  background-color: white;
  flex: 1;
  resize: none;
}

#session-notes .session-footer {
  display: flex;
  justify-content: space-between;
}

</style>
